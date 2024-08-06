import React, {useState} from 'react';
import Sidebar from './Sidebar';
import '../components/Dashboard.css';
import styled from 'styled-components';
import CardTransactions from './CardTransactions';
import transactionhistory from '../assets/transaction history.png'
import family from '../assets/Family.png'
import miscellaneous from '../assets/Miscellaneous.png'
import { RavenActionBar, RavenButton, RavenModal, RavenInputField } from '@ravenpay/raven-bank-ui';

const cards = [
    {
        id: 1,
        img: transactionhistory,
        amount: '87K',
        time: 'today',
        status: 'Total Transaction',
    },
    {
        id: 2,
        img: family,
        amount: '234,120',
        percentage: '',
        time: 'today',
        status: 'Total Customers',
    },
    {
        id: 3,
        img: miscellaneous,
        amount: 'N923K',
        time: 'today',
        status: 'Total Virtual Accouts',
    },
];



const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  background-color: #f3f4f6;
  padding: 20px;

  .header{
  font-size:16px;
  margin-top:30px;
  }
`;



const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <DashboardContainer>
            <Sidebar />
            <MainContent>
                <RavenActionBar
                    actionText="Create PIN"
                    className=""
                    msg="Hey Emmanuel, kindly create your Transaction PIN"
                    onAction={ openModal } 
                    onCancel={function noRefCheck() { }}
                    type="warning"
                    visible
                />
                <div className='header-component'>
                    <div>
                        <h1 className='header'>Good Evening, Emmanuel</h1>
                        <p>Welcome back to your dashboard, here’s an overview</p>
                    </div>
                    <RavenButton
                        color='green-light'
                        label="Create PIN"
                        onClick={openModal}
                        size="big"
                        type=""
                    />
                        <RavenModal
                            onClose={closeModal}
                            visble={isModalOpen}
                            title='Create PIN'
                            onClick={closeModal}
                            color="green-light"
                            label="Click me"
                            size="small"
                            type="btn-cancel"
                            btnLabel='Create Pin'
                            btnColor='green-light'

                    >
                            <RavenButton
                                onClick={closeModal}
                                color="green-light"
                                label="Click me"
                                size="big"
                                type="btn-cancel"
                            >
                            </RavenButton>
                        <h2 className='Pin'>Create Your PIN</h2>
                        <RavenInputField
                            color="green-light"
                            label="Your transaction PIN would be used to authenticate transactions made on the platform"
                            labelClassName="my_custom_class"
                            labelColor="purple-light"
                            onActionClick={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            onComplete={function noRefCheck() { }}
                            onCountDownComplete={function noRefCheck() { }}
                            onRemoveFile={function noRefCheck() { }}
                            onSizeError={function noRefCheck() { }}
                            onSubmit={function noRefCheck() { }}
                            pinFieldNumber={6}
                            type="pin"
                            className='input'
                        />
                    </RavenModal>
                </div>
                <div className='transaction-cards-wrapper'>
                    <div className='transaction-cards'>
                        {cards.map((card) => (
                            <CardTransactions
                                key={card.id}
                                img={card.img}
                                amount={card.amount}
                                time={card.time}
                                status={card.status}
                            />
                        ))}
                    </div>
                </div>
            </MainContent>
        </DashboardContainer>
    );
};

export default Dashboard;
