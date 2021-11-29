import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Productdisplay from '../Productdisplay/Productdisplay';
import './Product.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Product = () => {
    const tendata = fakeData.slice(1,15);
    
    const [productdata, setproductdata] = useState(tendata);
    
    const [cart,setCart]=useState([]);

    useEffect(()=>{

        const saveCart = getDatabaseCart();
        const productKeys =Object.keys(saveCart);
        const previousCart =productKeys.map(existingKey =>{
            const product = fakeData.find( pd => pd.key===existingKey)
            product.quantity=saveCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])








    const handleAddProduct=(product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd =>pd.key === toBeAddedKey)
       let count =1;
       let newCart;
        if(sameProduct){
            count =sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others =cart.filter(pd=> pd.key !== toBeAddedKey);
            newCart =[...others,sameProduct];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
        

        // console.log("clicked added",product)
        // const newCart=[...cart,product]
         setCart(newCart);
        // const sameProduct = newCart.filter(pd =>pd.key === product.key)
        // const count=sameProduct.length;
        addToDatabaseCart(product.key,count);
    }
    
    return (
        <div className="shopmain">
            <div className="product-container">
                <h4>product area</h4>
                {
                    productdata.map(pd =>
                    <Productdisplay
                       shoAddCart={true}
                        product={pd}
                        handleAddProduct={handleAddProduct}
                        
                    ></Productdisplay>)
                    
                }
                
            </div>
            <div className="shop-container">
               
                <Cart cart={cart}>
                        <Link to ="/OrderReview">
                            <button className="buttonreview">Order Review</button>

                        </Link>
                </Cart>
                
            </div>
            
        </div>
    );
};

export default Product;