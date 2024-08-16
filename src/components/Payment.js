import React, {useState} from 'react';
import './Balance.css';
import './Bill.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './Dashboard.css';
import './Payment.css';
import { FaChevronLeft } from 'react-icons/fa6';
import { RavenButton, RavenTable, RavenTableRow, } from '@ravenpay/raven-bank-ui';
import Pagination from './Pagination';
import Avatar1 from '../assets/Avartars (2).png';
import Avatar2 from '../assets/Avartars (3).png';

const Payment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 300;
    const itemsPerPage = 10;
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
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
                           <h1 className='header'>Bill Payment</h1>
                           <p>Welcome back to your dashboard, here’s an overview</p>
                           </div>
                        </div>
                          <figure className='back-btn'>
                              <img src="" alt="" />
                          </figure>
                      </div>
                     <div className='main-con'> 
                     <div className="sidebar">
                            <ul>
                                <li>Airtime</li>
                                <li className="active">Data</li>
                                <li>Electricity</li>
                                <li>Cable TV</li>
                                <li>Betting</li>
                                <li>Flight Booking</li>
                            </ul>
                        </div>
                        <div className='main-table'> 
                        <div className='header-component payment-header'>
                    <div className='header-items'>
                        <h1 className='header'>Data</h1>
                        <p>Welcome back to your dashboard, here’s an overview</p>
                    </div>
                    <RavenButton
                        color='green-dark'
                        label="Buy Data"
                        onClick
                        size="small"
                        type=""
                    />
                    
                </div>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
                
                <div className='raven-table'>
                    <RavenTable
                        className='table-head'
                        headerList={[
                            'BILLER NAME',
                            'AMOUNT',
                            'REFERENCE ID',
                            'TRANSACTION DATE',
                        ]}
                        >
                        <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box">
                                <div className='box pay'>
                                <figure className="img-box" />
                                <img src={Avatar1} alt='' className="text size"/>Airtel
                                </div>
                            </div>}
                            three={<div className="type-wrap">
                            <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure></div>}
                            two="₦500"
                            four="5 Sept, 2022 • 5:48PM"
                        />
                        <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box box pay"><figure className="img-box" />
                             <img src={Avatar1} alt='' className="text size" />Mtn
                            </div>}
                            three={<div className="type-wrap">
                                <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure>
                            </div>}
                            two="₦1,200"
                             four="5 Sept, 2022 • 5:48PM"
                        />
                        <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box box pay"><figure className="img-box" />
                                <img src={Avatar1} alt='' className="text size"/>
                                <p>9Mobile</p>
                                </div>}
                            three={<div className="type-wrap">
                                <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure>
                            </div>}
                            two="₦1,000"
                             four="5 Sept, 2022 • 5:48PM"
                        />
                        <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box box pay"><figure className="img-box" />
                             <img src={Avatar1} alt='' className="text size" />Glo
                            </div>}
                            three={<div className="type-wrap">
                                <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure>
                            </div>}
                            two="₦1,000"
                             four="5 Sept, 2022 • 5:48PM"
                        />
                         <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box box pay"><figure className="img-box" />
                             <img src={Avatar1} alt='' className="text size" />MTN
                            </div>}
                            three={<div className="type-wrap">
                                <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure>
                            </div>}
                            two="₦1,200"
                             four="5 Sept, 2022 • 5:48PM"
                        />
                         <RavenTableRow
                            onRowClick={function noRefCheck(){}}
                            one={<div className="type-text-box box pay"><figure className="img-box" />
                             <img src={Avatar1} alt='' className="text size" />Airtel
                            </div>}
                            three={<div className="type-wrap">
                                <figure className='id'>
                               676948763578565785... <img src={Avatar2} alt='' className='text size'/>
                            </figure>
                            </div>}
                            two="₦1,000"
                             four="5 Sept, 2022 • 5:48PM"
                        />
                        </RavenTable>
                    </div>
                </div>
                </div>
              </div>
              </div>
        </>
    )
  };

  export default Payment;