import React from 'react';
import './CardTransactions.css';

const CardTransactions = ({ img, amount, percentage, time, status }) => {
    return (
        <>
            <div className='card-transactions'>
                <img src={img} alt='img' className='title' />
                <div className='details-wrapper'>
                    <h1 className='amount'>{amount}</h1>
                    <div className='other'>
                        {percentage && (
                            <>
                                <p className='percentage'>{percentage}</p>
                                <p className='time'>{time}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className={`view-details ${status}`}>{status}</div>
            </div>
        </>
        
    );
};

export default CardTransactions;
