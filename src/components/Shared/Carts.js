import React, { useState } from 'react';
import Cart from './Cart';
import { useSelector } from 'react-redux';
import Styles from '../../styles/Carts.module.css';
import Store from '../Store';
import Footer from '../Footer';

const Carts = () => {
    const cart = useSelector((store) => store);
    const [totalPrice, setTotalPrice] = useState(0); // State for total price
    console.log(totalPrice)

    return (
        <>
            <Store />
            {
                cart.map(product => (
                    <Cart
                        key={product.id}
                        productData={product}
                        setTotalPrice={setTotalPrice} // Pass setTotalPrice function as prop
                    />
                ))
            }
            <div className={Styles.Paymentbar}>
                <div>
                    <button className={Styles.button}>پرداخت و ارسال</button>
                </div>
                <div className={Styles.ShowPrice}>
                    <h1> {totalPrice} : هزینه قابل پرداخت</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Carts;