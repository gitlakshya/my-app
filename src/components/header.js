import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="upcomingTreks">All Treks</Link></li>
          <li><Link to="seasonalTreks">Seasonal Treks</Link></li>
          <li><Link to="whyChooseUs">Why Choose Us</Link></li>
          <li><Link to="faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
