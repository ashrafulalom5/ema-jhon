import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

export const Shop = () => {
   const first10 = fakeData.slice(0,55);
   const [products, setProducts] = useState(first10);
   const [cart, setCart] = useState([]);
console.log('cheaking cart value', cart);

   const handleAddProduct = (product) =>{
       console.log('find product',product);
     
       const newCart = [...cart,product];
       setCart(newCart);
       const sameProduct = newCart.filter(pd => pd.key === product.key);
       console.log('product key find ', product.key);
       
       const count = sameProduct.length;
       addToDb(product.key, count);
   }
   console.log('shop cart', cart);
    return (
        <div className="twin-container">
            <div className="product-container">
                
                {

                products.map(pd => <Product
                Key={pd.key}
                showAddToCart={true}
                    
                handleAddProduct ={handleAddProduct}
                     product={pd}>
                     </Product> )

                }
                
            </div>

            <div className="cart-container">
            <Cart cart={cart}> </Cart>
              
            </div>
       
            
        </div>
    );
};


export default Shop;