import React from 'react';
import Styles from '../styles/Home.module.css';
import Logo from '../assets/Logo/CARA-PS.png';
import slide1 from '../assets/Slider/1.jpg';
import slide2 from '../assets/Slider/2.jpg';
import slide3 from '../assets/Slider/3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                <div className={Styles.title}>
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
        </div>
    );
};


export default Home;