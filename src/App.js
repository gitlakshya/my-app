import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';

import Header from './components/header';
import Landing from './components/landing';
import UpcomingTreks from './components/upcomingTreks';
import SeasonalTreks from './components/seasonalTreks';
import WhyChooseUs from './components/whyUs';
import FAQ from './components/faq';

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
