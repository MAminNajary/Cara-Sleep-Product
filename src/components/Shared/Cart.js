import React from 'react';

import Styles from '../../styles/Cart.module.css';

import { useDispatch, useSelector } from 'react-redux';


const Cart = ({ productData }) => {

    const cart = useSelector((store) => store);
    const dispatch = useDispatch();
    const quantity = 1;

    return (
        <div className={Styles.cart}>
            <div>
                <img src={productData.image} alt='0' />
                <h2>{productData.title}</h2>
                <div className={Styles.number}>
                    <button>+</button>
                    <span>تعداد :{quantity}</span>
                    <button>-</button>
                </div>
                <div className={Styles.price}>
                    <h5>
                        قیمت :  {productData.price} تومان

                    </h5>
                </div>
                <div>

                    <button onClick={() => dispatch({type: "REMOVE", payload: productData})} className={Styles.button}>
                        حذف از سبد

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Cart;