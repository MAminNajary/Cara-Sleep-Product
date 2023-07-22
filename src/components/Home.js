import React from 'react';
import Styles from '../styles/Home.module.css';
import Logo from '../assets/Logo/CARA-small.png';

const Home = () => {
    return (
        <div>
            <div>
                <div className={Styles.logobar}>
                    <img src={Logo} alt='LOGO' />
                    <h2>فروشگاه ملحفه و کالای خواب کارا</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;