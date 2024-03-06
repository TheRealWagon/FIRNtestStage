import { useState } from 'react';
import './App.css';
import { LoginPage, HomePage, WebsiteHomePage, WebAdminPage , ProfielPage} from './components/pages/pages'
import { Routes, Route, Router} from "react-router-dom";
import "./i18n";

function App() {

  return (
      <Routes>
          <Route path="/" element={<WebsiteHomePage />} />
          {/* <Route path="/residentieel" element={<Residentieel/>} /> */}
      </Routes>
  );
}

export default App;
