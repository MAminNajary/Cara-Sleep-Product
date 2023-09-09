import React from 'react';


const Card = ({img, name, symbol, price, marketCap, priceChange}) => {
    return (
        <div>
            <div>
                <img src={img} alt={name} />
                <span>{name}</span>
                <span>{symbol.toUpperCase()}</span>
                <span>$ {price.toLocaleString()}</span>
                <span ></span>
                <span>$ {marketCap.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Card;