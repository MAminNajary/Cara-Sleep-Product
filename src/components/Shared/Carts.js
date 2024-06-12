import React from 'react';

import Cart from './Cart';

import { useSelector } from 'react-redux';

import Styles from '../../styles/Carts.module.css'


import Store from '../Store';
import Footer from '../Footer';


const Carts = (props) => {

    const cart = useSelector((store) => store);
    
    return (
        <>
            <Store />
            {
                cart.map(product => <Cart key={product.id} productData={product} />)
            }
            <div className={Styles.Paymentbar}>
                <div>
                    <button className={Styles.button}>پرداخت و ارسال</button>
                </div>
                <div className={Styles.ShowPrice}>
                    <h1> : هزینه قابل پرداخت</h1>
                    <p>تومان {props.price} </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Carts;