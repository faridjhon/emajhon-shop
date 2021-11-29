import React from 'react';
import './Productdisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Productdisplay = (props) => {
    console.log(props)
    const {name,category,img,price,stock,key}=props.product;
    // const {...name}=props.product;
    return (
        <div className="carddisplay">
            <img src={img} alt="" />
            <h4><Link to={"/product/"+key} >{name}</Link></h4>
            <h4>{category}</h4>
            <h5>Tk : {price}</h5>
            <h5>Stock:{stock}</h5>
            
            {props.shoAddCart === true && <button  className="btn "
             onClick={()=>props.handleAddProduct(props.product)} >
                <FontAwesomeIcon icon={faShoppingCart} />
                 Add to Cart</button>}
           
        </div>
    );
};

export default Productdisplay;