import React from 'react'
import './Balance.css';
import './Bill.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import prev from "../assets/Icon (3).png";
import cancel from "../assets/Icon (4).png"
import { FaChevronLeft } from 'react-icons/fa6';
import NigeriaFlag from '../assets/Ellipse 731.png';
import mtn from "../assets/Ellipse 625.png";
import airtel from '../assets/Ellipse 625 (1).png';
import glo from '../assets/Ellipse 625 (2).png';
import etisalat from '../assets/Ellipse 625 (3).png';
import { RavenButton } from '@ravenpay/raven-bank-ui';




const Bill = () => {
  return (
    <>
        <div className='compo'>
              <Sidebar className="sidebar-balance"/>
              <div className='nav'>
                  <Navbar />
                  <div className='header-component top'>
                      <div className='header-items balance-header bill-item'>
                        <div>
                            <figure className='FaChevronLeft'>
                                <FaChevronLeft className='con'/>
                            </figure>
                        </div>
                         <div>
                         <h1 className='header'>Buy Data</h1>
                         <p>Welcome back to your dashboard, here’s an overview</p>
                         </div>
                      </div>
                        <figure className='back-btn'>
                            <img src={cancel} alt="" />
                        </figure>
                    </div>
                  <div className="container">
                    <header className="head">
                        <button className="back-btn">
                            <figure>
                                <img src={prev} alt="" />
                            </figure>
                        </button>
                    </header>
                <main className="main-content">
                    <form className="data-purchase-form">
                    <div className="input">
                        <label htmlFor="mobile-number">Mobile Number</label>
                        <div className="phone-number-container">
                    <div className="country-code-container">
                        <img
                        src={NigeriaFlag}
                        alt="Country Flag"
                        className="country-icon"
                        />
                        <select className="country-code-select">
                        <option value="+234">+234</option>
                        </select>
                    </div>
                    <input
                        type="tel"
                        className="phone-number-input"
                        placeholder="8066701121"
                    />
                    </div>
                        <button className="use-business-number">Use my Business Number</button>
                    </div>

                    <div className="input">
                        <label>Select Network Provider</label>
                        <div className="network-providers">
                        <button type="button" className="provider-btn"><img src={mtn} alt="MTN" /></button>
                        <button type="button" className="provider-btn"><img src={airtel} alt="Airtel" /></button>
                        <button type="button" className="provider-btn"><img src={glo} alt="Glo" /></button>
                        <button type="button" className="provider-btn"><img src={etisalat} alt="9Mobile" /></button>
                        </div>
                    </div>

                    <div className="input">
                        <label>Data Plan <span className="balance">Bal: ₦12,000,000.00</span></label>
                        <select className="data-plan">
                        <option value="" disabled selected>Select Data Plan</option>
                        </select>
                    </div>

                    <button className="add-recipient">+ Add New Recipient</button>

                    <RavenButton
                        color="green-dark"
                        label="Buy Data"
                        onClick={function noRefCheck(){}}
                        size="small"
                        type=""
                        className='buy-btn'
                        />
                    </form>
                </main>
            </div>
            </div>
            </div>
      </>
  )
}

export default Bill