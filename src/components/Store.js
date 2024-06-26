import React from 'react';
import { Link } from 'react-router-dom';

import Styles from '../styles/Store.module.css';

//////// Logo
import Logo from '../assets/Logo/CARA-PS.png';

const Store = () => {
    return (
        <div>
            <div className={Styles.header}>
                <div className={Styles.logo}>
                    <Link to="/Home">
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className={Styles.searchBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input type='text' placeholder='جست و جو...' />
                </div>
                <div className={Styles.cart}>
                    <Link to='/Store/Carts'>
                        <button>
                                سبدخرید
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={Styles.navbar}>
                <div className={Styles.navbarItems}>
                    <Link to="/Store/SleepProducts"><button>کالای خواب</button></Link>
                    <Link to="/Store/Cloths"><button>ملحفه</button></Link>
                    <Link to="/Store/Mattress"><button>تشک</button></Link>
                    <Link to="/Store/Etc"><button>متفرقه</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Store;