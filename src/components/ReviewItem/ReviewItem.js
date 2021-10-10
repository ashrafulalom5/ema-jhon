import React from 'react';

const ReviewItem = (props) => {
    const {img, name, quantity,key, price} = props.product;
    console.log('this product', props.product);
    const reviewItemStyle ={
        borderBottom: '2px solid lightgray',
        marginBottom: '6px',
        paddingBottom: '6px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p> Quantity:{quantity}</p>
            <p><small> $ {price} </small></p>
            <img src={img} alt="" />
            <br />
            <button 
                className="main-button"
                onClick={ ()=>  props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;