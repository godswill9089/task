import React from 'react';
import './Currency.css';
import NigeriaFlag from '../assets/Ellipse 731.png';
import dropdown from "../assets/chevron-down.png";

const Currency = () => {
  return (
    <div className="currency-selector">
      <img src={NigeriaFlag} alt="Nigerian Flag" className="flag-icon" />
      <span className="currency-code">NGN</span>
      <span className="dropdown-icon">
        <figure>
            <img src={dropdown} alt='' className='dropdown'/>
        </figure>
      </span>
    </div>
  );
};

export default Currency;
