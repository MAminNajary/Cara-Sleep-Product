import React from 'react';

import Styles from '../../styles/Product.module.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector} from 'react-redux';

//////// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Product = ({productData}) => {
    
    const cart = useSelector((store) => store);
    const dispatch = useDispatch();

    return (
        <Link id={Styles.Link} to={`/Store/details/${productData.id}`}>
            <div data-aos="fade-up" data-aos-duration="1000" className={Styles.Product}>
                <div>
                    <img src={productData.image} alt='0'/>
                    <h2>{productData.id}</h2>
                    <h3>{productData.price}</h3>
                    <Link id={Styles.Link}>
                    <div>
                        <button onClick={() => dispatch({type: "ADD", payload: productData})} className={Styles.button}>
                            اضافه به سبد خرید
                        </button>
                    </div>
                    
                    </Link>
                    <h4>اطلاعات بیشتر</h4>
                </div>
            </div>
        </Link>
    );
};

export default Product;