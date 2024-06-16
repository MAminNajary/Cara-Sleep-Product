import React, { useState, useEffect } from 'react';
import Styles from '../../styles/Cart.module.css';
import { useDispatch } from 'react-redux';

const Cart = ({ productData, setTotalPrice }) => {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(productData.price);


    useEffect(() => {
        const newPrice = productData.price * count;
        setPrice(newPrice);
        setTotalPrice(price);
    }, [count, productData.price, setTotalPrice, price]); // اضافه کردن price به وابستگی‌های useEffect

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const dispatch = useDispatch();

    return (
        <>
            <div className={Styles.cart}>
                <div>
                    <img src={productData.image} alt='0' />
                    <h2>{productData.title}</h2>
                    <div className={Styles.number}>
                        <button onClick={increaseCount}>+</button>
                        <span>تعداد : {count}</span>
                        <button onClick={decreaseCount}>-</button>
                    </div>
                    <div className={Styles.price}>
                        <h5>
                            قیمت : {price} تومان
                        </h5>
                    </div>
                    <div>
                        <button onClick={() => dispatch({ type: "REMOVE", payload: productData })} className={Styles.deleteButton}>
                            حذف از سبد
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;