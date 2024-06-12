import React, {useState, useEffect} from 'react';

import Carts from './Carts';

import Styles from '../../styles/Cart.module.css';

import { useDispatch } from 'react-redux';


const Cart = ({ productData }) => {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState();

    useEffect(() => {
        setPrice(productData.price * count);
      }, [count]);


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
                            قیمت :  {price} تومان

                        </h5>
                        <Carts price={price} />
                    </div>
                    <div>

                        <button onClick={() => dispatch({type: "REMOVE", payload: productData})} className={Styles.deleteButton}>
                            حذف از سبد

                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;