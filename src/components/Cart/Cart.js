import React from 'react';

import './Cart.css';


const Cart = (props) => {
    
   const cart =props.cart;
       
    // const totalPrice =cart.reduce((total,prd)=>total + prd.price ,0)
    let totalPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice =totalPrice +product.price * product.quantity;
        debugger;
    }

    let shipping=0;
    if (totalPrice<=100) {
        shipping =0;
        
    } else if (totalPrice>100){
        shipping = 5;
    }
    let vat = (totalPrice *.05);
 

    return (
        <div>
            <h2>this is Card area</h2>
            <p>{cart.length}</p>
             
           
            <p>Shipping Cost: {shipping}</p>
            <p>VAT : 5% </p>
            <p>Total Price: {totalPrice + shipping }</p>
            <p>Total Price with VAT: {totalPrice + shipping + vat}.</p>
            {/* <Link to ="/OrderReview">
            <button className="buttonreview">Order Review</button>

            </Link> */}
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;