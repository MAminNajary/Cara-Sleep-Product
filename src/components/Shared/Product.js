import React from 'react';

import Styles from '../../styles/Product.module.css';
import { Link } from 'react-router-dom';

//////// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Product = ({productData}) => {
    return (
        <Link id={Styles.Link} to={`/Store/details/${productData.id}`}>
            <div data-aos="fade-up" data-aos-duration="1000" className={Styles.Product}>
                <div>
                    <img src={productData.image} alt='0'/>
                    <h2>{productData.id}</h2>
                    <h3>{productData.price}</h3>
                    <div>
                        <button className={Styles.button}>
                            اضافه به سبد خرید
                        </button>
                    </div>
                    <h4>اطلاعات بیشتر</h4>
                </div>
            </div>
        </Link>
    );
};

export default Product;