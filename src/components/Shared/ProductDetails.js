import React from 'react';
import Store from '../Store';

import { useParams } from 'react-router-dom';
import { useProductDetails } from '../context/ProductContextProvider';

import Styles from '../../styles/ProductDetails.module.css';

//////// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '../Footer';
AOS.init();


const ProductDetails = () => {
    const {id} = useParams();
    
    const ProductDetails = useProductDetails(+id);

    return (
        <>
            <Store />
        
            <div className={Styles.ProductDetails}>
                <div data-aos="fade-right" data-aos-duration="1000" className={Styles.img}>
                    <img src={ProductDetails.image} alt='0' />
                </div>

                <div data-aos="fade-left" data-aos-duration="700" className={Styles.info}>
                    <h1>
                        {ProductDetails.title}
                    </h1>
                    <h2>
                        {ProductDetails.description}
                    </h2>
                    <p>
                        قیمت : {ProductDetails.price} تومان
                    </p>
                    <div>
                        <button className={Styles.button}>
                            اضافه به سبد خرید
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;