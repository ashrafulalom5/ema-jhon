import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    console.log(productKey);
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);

    return (
        <div>
            <h1> your product detail  </h1>
            <Product 
           showAddToCart={false}
            product={product} >
                 </Product>
        </div>
    );
};

export default ProductDetail;