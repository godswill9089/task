import React from "react";
import "./CardDetails.css";
import './Balance.css';
import './Bill.css';
import './CardDetails.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { FaChevronLeft } from 'react-icons/fa6';
import { RavenButton } from "@ravenpay/raven-bank-ui";
import wallect from '../assets/Icon (5).png'
import setting from "../assets/Icon (7).png";
import card from "../assets/Rectangle 6443.png"

const CardDetails = ({ label, isActive }) => {
  return (
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
               <h1 className='header'>Card Details</h1>
               <p>Welcome back to your dashboard, here’s an overview</p>
               </div>
            </div>
                <div className="fund-btn">
                <RavenButton
                    color='green-dark'
                    size="small"
                    type=""
                    className="card-btn"
                >
                    Fund Card
                    <img src={wallect} alt="icon" style={{ marginRight: '0rem' }} />
                </RavenButton>

                <figure className="settings">
                    <img src={setting} alt=""/>
                </figure>
                </div>
          </div>
          <div className="card-details-container">
            <div className="card-tabs">
                <button className="tab active">Card Details</button>
                <button className="tab">Card Transactions</button>
            </div>
            <div className="card-content">
                <div className="card-image-container">
                    <img src={card} alt="Card" className="card-image" />
                </div>
                <div className="card-info">
                    <div className="card-number">
                        <h2>12345****6849</h2>
                    </div>
                    <div className="card-info-container">
                <table className="card-info-table">
                <tbody className="tb">
                    <tr>
                        <td>Card Name</td>
                        <td>Daniel Adebowale</td>
                    </tr>
                    <tr>
                        <td className="tr">Card Type</td>
                        <td>Virtual</td>
                    </tr>
                    <tr className="tr">
                        <td className="tr">Card Brand</td>
                        <td className="card-brand">
                            <span className="brand-logo">AD</span> VISA
                        </td>
                    </tr>
                    <tr>
                        <td className="tr">Card CVV</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td className="tr">Currency</td>
                        <td>NGN</td>
                    </tr>
                    <tr>
                        <td className="tr">Balance</td>
                        <td>₦250,000.00</td>
                    </tr>
                    <tr>
                        <td className="tr">Date Created</td>
                        <td>Jan, 6 2023, 5:48PM</td>
                    </tr>
                    <tr>
                        <td className="tr">Expiry Date</td>
                        <td>12 / 25</td>
                    </tr>
                    <tr>
                        <td className="tr">Customer Email</td>
                        <td>emmy4sure.web@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
                </div>
            </div>
        </div>
     </div>
  </div>
  );
};

export default CardDetails;
