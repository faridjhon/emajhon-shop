import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Productdisplay from '../Productdisplay/Productdisplay';
import './Productdetails.css';

const ProductDetails = () => {
    const{productkey}=useParams();
    const product =fakeData.find(pd=>pd.key === productkey);
    

    return (
        <div className="productdetails">
            {/* <img src={product.img} alt="" />
            <h4>{product.name}</h4>
            <h4>{product.category}</h4>
            <h5>Tk : {product.price}</h5>
            <h5>Stock:{product.stock}</h5> */}
            <Productdisplay shoAddCart={false} product={product}></Productdisplay>
        </div>
    );
};

export default ProductDetails;