import { useEffect, useState } from 'react';
import {AreaChart, XAxis, YAxis, CartesianGrid, Label, Tooltip, Area, ResponsiveContainer} from 'recharts'
import axios from 'axios';
import User from '../../../api/user';
import { IoIosArrowDropright, IoIosArrowDropleft, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import "./dayAheadPriceChart.css"

const DayAheadPriceChart = (dateToday) => {
    const [data, setData] = useState("");
    const [currentDate, setCurrentDate] = useState(dateToday.dateToday);
    const [allowForward, setAllowForward] = useState(false);
    const userApi = User();

    useEffect(() => {
        
        fetchData();

    }, [currentDate])

    const fetchData = async () => {
        setAllowForward(true);

        //check if we need to dissable forward button
        const todayDate = new Date()

        if (currentDate.getDate() == todayDate.getDate()) {
            if (todayDate.getHours() < 15) {
                //block forward button
                setAllowForward(false)

            }
        }

        const tomorrowDate = new Date(todayDate)
        tomorrowDate.setDate(tomorrowDate.getDate() + 1)

        if (currentDate.getDate() == tomorrowDate.getDate()) {
            //block forward button
            setAllowForward(false);
        }
        
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        try {
            const response = await userApi.getDayAheadPrice(formattedDate);

        
            const dataWithConvertedPrice = response.data.map(item => ({
                ...item,
                price: (item.price / 1000).toFixed(5) // Convert price from mWh to kWh and round off to 5 decimal places
            }));
        
            setData(dataWithConvertedPrice);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const OnBackButtonClick = () => {
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate)
    }   

    const OnForwardButtonClick = () => {
        
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    }


    return (
        <div style={{display:'flex', flexFlow:"column nowrap", alignItems:"flex-end", width:"100%", height:"100%"}}>
            <ResponsiveContainer width="100%" height={"75%"}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#65D8A0" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#65D8A0" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis stroke='white' dataKey="dateTime" interval={1} 
                        tickFormatter={(value) => {
                        const date = new Date(value);
                        const hours = date.getHours();
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        const formattedHours = hours % 12 || 12;
                        return `${formattedHours}${ampm}`;}} 
                    />
                    <YAxis stroke='white' dataKey="price" unit="€" />
                    <Tooltip labelFormatter={(value) => new Date(value).toLocaleString()} formatter={(value) => [`Price: ${value} €/kWh`]}/>
                    <Area type="monotone" dataKey="price" stroke="#65D8A0" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
            <div style={{display:'flex', flexFlow:"row", justifyContent:"flex-start", alignItems:"center", marginRight:"40px", borderRadius:"5px"}}>
                    <div style={{display:"flex", alignItems:"center", paddingRight:"5px"}}><button style={{background:"none", border:"none"}} className='DayAheadPriceChartBackBtn' onClick={OnBackButtonClick}><IoIosArrowDropleftCircle style={{ width: '20px', height: '20px' }} color='white'/></button></div>
                    <div style={{color:"white", padding:"2px 5px", width:"px", textAlign:"center"}}>{currentDate.toLocaleDateString()}</div>
                    <div className='DayAheadPriceChartForwardBtn' style={{display:"flex", alignItems:"center", padding:"0px 5px"}}><button style={{background:"none", border:"none"}} className='DayAheadPriceChartBackBtn' onClick={allowForward ? OnForwardButtonClick : undefined}><IoIosArrowDroprightCircle style={{ width: '20px', height: '20px' }} color='white'/></button></div>
            </div>
        </div>
        
    )


}


export default DayAheadPriceChart;