import { useEffect, useState, createContext, useContext } from 'react';
import React from 'react';

/// API
import { getProducts } from '../../Services/API';

export const ProductsContext = createContext();

export const useProductDetails = (id) => {
    const products = useContext(ProductsContext);
    const result = products.find((product) => product.id === id);
    return result;
}

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }
        
        fetchAPI();
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;