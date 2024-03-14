import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './horeca.module.css'; // Zorg ervoor dat de pad correct is

const services = [
  { title: 'Service 1', description: 'Beschrijving van Service 1' },
  { title: 'Service 2', description: 'Beschrijving van Service 2' },
  { title: 'Service 3', description: 'Beschrijving van Service 3' },
];

const faqs = [
  { question: 'Hoe kan ik bestellen?', answer: 'Je kunt bestellen via onze website of telefonisch.' },
  { question: 'Wat zijn de bezorgtijden?', answer: 'Wij bezorgen van 09:00 tot 21:00.' },
];

const InteractivePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <animated.div style={fadeIn} className={styles.pageContainer}>
      <div className={styles.banner}>Info</div>

      <div className={styles.servicesSection}>
        {services.map((service, index) => (
          <animated.div key={index} className={styles.serviceCard} style={useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' }, delay: 100 * index })}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </animated.div>
        ))}
      </div>

      <div className={styles.servicesSection}>
        {services.map((service, index) => (
          <animated.div key={index} className={styles.serviceCard} style={useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' }, delay: 100 * index })}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </animated.div>
        ))}
      </div>

      <div className={styles.faqSection}>
        <h2>Veelgestelde Vragen</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem} onClick={() => toggleFAQ(index)}>
            <div className={styles.question}>
              {faq.question}
            </div>
            <animated.div className={styles.answer} style={{ maxHeight: activeIndex === index ? '500px' : '0', opacity: activeIndex === index ? 1 : 0 }}>
              {faq.answer}
            </animated.div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default InteractivePage;
