import React from 'react';

import Styles from '../../styles/Cart.module.css';
import { Link } from 'react-router-dom';

import Product from './Product';

import Cart from './Cart';

import { useDispatch, useSelector } from 'react-redux';


import Store from '../Store';

const Carts = () => {

    const cart = useSelector((store) => store);
    const dispatch = useDispatch();
    return (
        <>
            <Store />
            {
                cart.map(product => <Cart key={product.id} productData={product} />)
            }
        </>
    );
};

export default Carts;