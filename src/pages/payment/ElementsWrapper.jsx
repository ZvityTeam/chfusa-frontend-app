import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import ModalComponent from '../../components/modal/ModalComponent';
import './PaymentPage.css'
const ElementsWrapper = ({ stripePromise, options }) => {
    const [IsModalOpen, setIsModalOpen] = useState(true)
    const location = useLocation();
    console.log("🚀 ~ ElementsWrapper ~ location:", location)
    const ModalCloseHandler = () => {
        setIsModalOpen(false)
        sessionStorage.removeItem("clientSecret");
    }
    return (
        <ModalComponent title='Payment Option' showCloseButton={location.pathname === '/contribute/checkout' ? false : true} isOpen={IsModalOpen} onClose={ModalCloseHandler}>
            <div className='App'>
                <Elements stripe={stripePromise} options={options}>
                    <Outlet />
                </Elements>
            </div>
        </ModalComponent>
    );
};

export default ElementsWrapper;
