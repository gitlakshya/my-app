import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import UpcomingTreks from './components/UpcomingTreks';
import SeasonalTreks from './components/SeasonalTreks';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Element name="home">
          <Landing />
        </Element>
        <Element name="upcomingTreks">
          <UpcomingTreks />
        </Element>
        <Element name="seasonalTreks">
          <SeasonalTreks />
        </Element>
        <Element name="whyChooseUs">
          <WhyChooseUs />
        </Element>
        <Element name="faq">
          <FAQ />
        </Element>
      </div>
    </Router>
  );
}

export default App;
