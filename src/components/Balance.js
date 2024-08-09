import React, {useState} from 'react'
import './Balance.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { RavenButton, RavenModal, RavenInputField } from '@ravenpay/raven-bank-ui';

const Balance = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => {
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
        };

  return (
      <>
        <div className='compo'>
              <Sidebar />
              <div className='nav'>
                  <Navbar />
                  <div className='header-component'>
                      <div className='header-items'>
                          <h1 className='header'>Good Evening, Emmanuel</h1>
                          <p>Welcome back to your dashboard, here’s an overview</p>
                      </div>
                      <RavenButton
                          color='green-dark'
                          label="Create PIN"
                          onClick={openModal}
                          size="small"
                          type=""
                      />
                      <RavenModal
                          onClose={closeModal}
                          visble={isModalOpen}
                          title='Create PIN'
                          onClick={closeModal}
                          color="green-dark"
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
              </div>
        </div>
      </>
  )
}

export default Balance