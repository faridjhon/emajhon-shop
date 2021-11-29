import React from 'react';
import Cart from '../Cart/Cart';

import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props.xyz)
    
    const{name,price,quantity,key}=props.xyz;
    

    const handleRemoveProduct=props.handleRemoveProduct;
    return (
        <div >
            <h2>{name}</h2>
            <h4>{quantity}</h4>
            <h4>{price}</h4>
            <button onClick={()=>handleRemoveProduct(key)}  className="buttonreview">Remove</button>

            </div>
            
            
        
    );
};

export default ReviewItem;