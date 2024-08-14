import React from 'react'
import {useState} from 'react'
import './Transaction.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Currency from './Currency';
import { RavenInputField, RavenTable, RavenTableRow} from '@ravenpay/raven-bank-ui';
import FilterIcon  from '../assets/Icon.png';
import download from '../assets/download.png';
import Pagination from './Pagination';
import Avatargreen from '../assets/Avartars.png';
import Avatarred from '../assets/Avartars (1).png';
import report from '../assets/Icon (2).png'
import badge from '../assets/Badge.png';
import failed from '../assets/Badge (2).png'

const Transaction = () => {
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
              <div className='header-component'>
                  <div className='header-items balance-header'>
                      <h1 className='header'>Transactions</h1>
                      <p>Welcome back to your dashboard. here’s an overview</p>
                  </div>
                  <Currency />
              </div>
              <div className='table-body'>
              <div className='table-top'>
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
                type="search"
                placeholder='Search'
                className='search'
                />
               <div className='filter'>
                <button className="filter-button">
                    <span>Filter</span>
                    <figure>
                        <img src={FilterIcon} alt="" className="filter-icon" />
                    </figure>
                </button>
                </div>
                <div className='report'>
                    <button className='report-button'>
                        <span>Report</span>
                        <figure>
                            <img src={report} alt='' className='report-icon' />
                        </figure>
                    </button>
                </div>
               <div className='download-btn'> 
               <button className="export-button">
                    <span>Export</span>
                    <figure>
                        <img src={download} alt='' className="download-icon"/>
                    </figure>
                </button>
               </div>
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
                        'REFERENCE ID',
                        'TYPE',
                        'AMOUNT',
                        'FEE',
                        'STATUS',
                        'TRANSACTION DATE',
                    ]}
                    >
                    <RavenTableRow
                        five={<div className="status-type-wrap false false false false false">
                             <figure>
                                <img src={badge} alt=''></img>
                            </figure>
                        </div>}
                        four={<div className="type-wrap"><span>₦10.00</span></div>}
                        onRowClick={function noRefCheck(){}}
                        one={<div className="type-text-box box"><figure className="img-box" />
                         <img src={Avatargreen} alt='' className="text size"/>202303300238BHCJEDE
                        </div>}
                        three={<div className="type-wrap"><span>₦12,000,000.00</span></div>}
                        two="Collection"
                        six="5 Sept, 2022 • 5:48PM"
                    />
                    <RavenTableRow
                        five={<div className="status-type-wrap false false status-type-wrap-fail false false">
                             <figure>
                                <img src={failed} alt=''></img>
                            </figure>
                        </div>}
                        four={<div className="type-wrap"><span>₦100</span></div>}
                        onRowClick={function noRefCheck(){}}
                        one={<div className="type-text-box box"><figure className="img-box" />
                         <img src={Avatargreen} alt='' className="text size" />202303300238BHCJEDE
                        </div>}
                        three={<div className="type-wrap"><span>₦12,00</span></div>}
                        two="Transfer"
                         six="5 Sept, 2022 • 5:48PM"
                    />
                    <RavenTableRow
                        five={<div className="status-type-wrap false false false false status-type-wrap-pending">
                            <figure>
                                <img src={badge} alt=''></img>
                            </figure>
                        </div>}
                        four={<div className="type-wrap"><span>₦200</span></div>}
                        onRowClick={function noRefCheck(){}}
                        one={<div className="type-text-box box"><figure className="img-box" />
                            <img src={Avatarred} alt='' className="text size"/>202303300238BHCJEDE
                            </div>}
                        three={<div className="type-wrap"><span>₦12,000,000.00</span></div>}
                        two="Collection"
                         six="5 Sept, 2022 • 5:48PM"
                    />
                    <RavenTableRow
                        five={<div className="status-type-wrap false false false false false">
                             <figure>
                                <img src={badge} alt=''></img>
                            </figure>
                        </div>}
                        four={<div className="type-wrap"><span>₦10.00</span></div>}
                        onRowClick={function noRefCheck(){}}
                        one={<div className="type-text-box box"><figure className="img-box" />
                         <img src={Avatarred} alt='' className="text size" />202303300238BHCJEDE
                        </div>}
                        three={<div className="type-wrap"><span>₦12,000,000.00</span></div>}
                        two="Collection"
                         six="5 Sept, 2022 • 5:48PM"
                    />
                    </RavenTable>
                </div>
              </div>
          </div>
    </div>
  </>
  )
}

export default Transaction