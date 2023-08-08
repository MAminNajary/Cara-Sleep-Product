import React from 'react';

//////// Styles
import Styles from '../styles/Home.module.css';

//////// Logo
import Logo from '../assets/Logo/CARA-PS.png';
import Instagram from '../assets/Logo/insta.png';
import Enamad from '../assets/Logo/enamad.png';

//////// Slides
import slide1 from '../assets/Slider/1.jpg';
import slide2 from '../assets/Slider/2.jpg';
import slide3 from '../assets/Slider/3.jpg';

//////// Cards
import card1 from '../assets/Cards/Card 1.png';
import card2 from '../assets/Cards/Card 2.png';
import card3 from '../assets/Cards/Card 3.png';
import card4 from '../assets/Cards/Card 4.png';

//////// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';

//////// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Home = () => {
    return (
        <div>
            <div className={Styles.header}>
                <div className={Styles.logobar}>
                    <img src={Logo} alt='LOGO' />
                    <button>درباره ما</button>
                    <button>تماس باما</button>
                    <button>تشک</button>
                    <button>ملحفه جات</button>
                    <button>کالای خواب</button>
                    <h2>کالای خواب کارا</h2>
                </div>
                <div data-aos="fade-up" className={Styles.title}>
                    <h1>
                        با کالای خواب کارا در رویاهات زندگی کن!
                    </h1>
                    <p>
                        در فروشگاه اینترنتی کارا بهترین کیفیت را با بهترین قیمت بخر...
                    </p>
                </div>
                
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-pause="false" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                        <img id={Styles.Slides} src={slide1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img id={Styles.Slides} src={slide2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item active">
                        <img id={Styles.Slides} src={slide3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div data-aos="fade-up" className={Styles.main}>
                <h1>دسته بندی محصولات</h1>
                <div className={Styles.cards}>
                    <div>
                        <button>
                            <img src={card1} alt='...' />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={card4} alt='...' />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={card2} alt='...' />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={card3} alt='...' />
                        </button>
                    </div>
                </div>
            </div>
            <div className={Styles.footer}>
                <div className={Styles.etemad}>
                    <img src={Logo} alt='...'/>
                    <img src={Enamad} alt='...'/>
                </div>
                <div className={Styles.socialMedia}>
                    <a href=''>
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
        </div>
    );
};


export default Home;