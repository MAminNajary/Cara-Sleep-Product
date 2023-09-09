import React, { useEffect, useState} from 'react';

import Store from '../Store';

import Card from './Card';
import Styles from '../../styles/Card.module.css';
import { getProducts } from '../../Services/API';

const SleepProducts = () => {
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getProducts()
            setCards(data);
        }

        fetchAPI();
    }, [])
    return (
        <div>
            <Store />
            <div className={Styles.Cards}>
                {Cards.map(coin => <Card
                    key={coin.id}
                    img={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h.toFixed(2)}
                />)}
            </div>
        </div>
    );
};

export default SleepProducts;