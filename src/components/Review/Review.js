import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteFromDb, getStoredCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
// import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'


const Review = () => {
   const[cart, setCart] = useState([]);

const removeProduct = (productKey) =>{
    // console.log('this is product', productKey);
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);

    deleteFromDb(productKey);
}

useEffect( () => {
    const saveCart = getStoredCart();
    console.log( 'save cart',saveCart);
    const productKeys = Object.keys(saveCart); 
    const cartProducts = productKeys.map(Key =>{
        const product = fakeData.find( pd => pd.key ===Key );
        const newProduct ={...product, quantity:saveCart[Key]}
       
        return newProduct;
    })
    setCart(cartProducts);
},[])
console.log('review text', cart);
    return (
        <div className="twin-container">
           <div className="product-container">
           {
                cart.map(pd => <ReviewItem 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}> </ReviewItem>)
            }
           </div>

           <div className="card-content">
           {/* <Cart cart={cart}> </Cart> */}
           </div>
           
        </div>
    );
};

export default Review;