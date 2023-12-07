import React, {useContext} from 'react';
import Store from '../Store';

import Product from '../Shared/Product';
import {ProductsContext} from '../context/ProductContextProvider';

import Styles from '../../styles/Product.module.css';

const Cloths = () => {

    const products = useContext(ProductsContext);
    const sleepProducts = products.filter((item) => item.category === "jewelery");

    return (
        <div>
            <Store />
            <div className={Styles.Products}>
                {
                    sleepProducts.map(product => <Product key={product.id} productData={product} />)
                }
            </div>
        </div>
    );
};

export default Cloths;