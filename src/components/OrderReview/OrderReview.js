import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const OrderReview = () => {
    const [cart,setCart]=useState([]);
    //state for thank you image show
    const [orderPlaced, setOrderPlaced]=useState(false);


    const handlePlaceOrder = () =>{
        console.log("clicked palaced order")
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        // alert("Thank you for Order Placed ")
    }




    const handleRemoveProduct=(product)=>{
        // console.log("clicked remove",product)
        const newCart=cart.filter(pd=>pd.key !== product);
        setCart(newCart);
        removeFromDatabaseCart(product);
    }


    useEffect(()=>{

           const saveCart= getDatabaseCart();
           console.log(saveCart)
           const productKeys = Object.keys(saveCart);

           const cartProducts= productKeys.map(key =>{
           const product = fakeData.find(pd=>pd.key === key);
           product.quantity=saveCart[key];
            return product;
           });
           setCart(cartProducts);
        //    console.log(counts)
    },[])

    //for placed order submit thank you image 
    let thankyou;
    if(orderPlaced){
       thankyou= <img src={happyImage} alt="" />
    } 

    return (
        <div className="shopmain">
            <div className="product-container">
            {
                cart.map(xy=> <ReviewItem 
                    handleRemoveProduct={handleRemoveProduct}
                    xyz={xy}></ReviewItem> )
            }
            {
                thankyou
            }
            </div>
            <div className="shop-container">
                             
               <Cart cart={cart}>
                   <button onClick={handlePlaceOrder} className="btn">Place Order</button>
               </Cart>
              
               
           </div>
            
        </div>
    );
};

export default OrderReview;