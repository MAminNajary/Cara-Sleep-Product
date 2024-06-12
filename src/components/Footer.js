import React from 'react'

//////// Logo
import Logo from '../assets/Logo/CARA-PS.png';
import Instagram from '../assets/Logo/insta.png';
import Enamad from '../assets/Logo/enamad.png';


import Styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <>
        <div className={Styles.footer}>
                    <div className={Styles.etemad}>
                        <img src={Logo} alt='...'/>
                        <img src={Enamad} alt='...'/>
                    </div>
                    <div className={Styles.socialMedia}>
                        <a href='.'>
                            <img src={Instagram} alt='...'/>
                        </a>
                        <h3>از جدیدترین محصولات ما با خبر شوید!</h3>
                    </div>
                    <div className={Styles.option}>
                        <button>پشتیبانی</button>
                        <button>سوالات متداول</button>
                        <button>شکایات و پیشنهادات</button>
                        <button>شرایط همکاری</button>
                    </div>
                </div>
    </>
  )
}

export default Footer