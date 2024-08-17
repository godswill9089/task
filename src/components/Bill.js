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
import { RavenButton, RavenInputField } from '@ravenpay/raven-bank-ui';




const Bill = () => {
    const data = [
        {label: "Mtn", value:"trye"}, 
        {label: "Glo", value:"trye"},
        {label: "9Mobile", value:"trye"},
        {label: "Airtel", value:"trye"},
    ]
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
                        <figure className='back-img'>
                            <img src={cancel} alt="" className='back-img'/>
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
                    <RavenInputField
                        color="black-light"
                        labelClassName="my_custom_class"
                        onActionClick={function noRefCheck(){}}
                        onChange={function noRefCheck(){}}
                        onComplete={function noRefCheck(){}}
                        onCountDownComplete={function noRefCheck(){}}
                        onRemoveFile={function noRefCheck(){}}
                        onSizeError={function noRefCheck(){}}
                        onSubmit={function noRefCheck(){}}
                        type="phone"
                        placeholder='Number'
                        className='Number'
                        />
                    <div className="input">
                        <label className='label'>Select Network Provider</label>
                        <div className="network-providers">
                        <button type="button" className="provider-btn"><img src={mtn} alt="MTN" /></button>
                        <button type="button" className="provider-btn"><img src={airtel} alt="Airtel" /></button>
                        <button type="button" className="provider-btn"><img src={glo} alt="Glo" /></button>
                        <button type="button" className="provider-btn"><img src={etisalat} alt="9Mobile" /></button>
                        </div>
                    </div>

                    <div className="input plan">
                        <label>Data Plan <span className="balance">Bal: ₦12,000,000.00</span></label>
                        <RavenInputField
                        color="black-light"
                        labelClassName="my_custom_class"
                        labelColor="purple-light"
                        onActionClick={function noRefCheck(){}}
                        onChange={function noRefCheck(){}}
                        onComplete={function noRefCheck(){}}
                        onCountDownComplete={function noRefCheck(){}}
                        onRemoveFile={function noRefCheck(){}}
                        onSizeError={function noRefCheck(){}}
                        onSubmit={function noRefCheck(){}}
                        type="select"
                        placeholder='Select Data Plan'
                        select={data}
                        />
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