import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    console.log('this is for cart', props);
    const cart = props.cart;
   console.log('cartData is missing', cart);
    // const total = cart.reduce((total,prdct) => total+prdct.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price *  product.quantity;

    }
     console.log('total-shop', total);
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
  
    else if(total > 0){
        shipping = 12.99;
    }
   
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className="text-danger">Order Summary</h4>
            <p>Items Orderd: {cart.length}</p>
            <p>Product Prise: {formatNumber(total)}</p>
            <p><small> Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p> Total Prie: {grandTotal}</p>
            <br />
            <Link to="/review"> 
                 <button className ="main-button"> Review Oeder</button>
            </Link>
        </div>
    );
};

export default Cart;