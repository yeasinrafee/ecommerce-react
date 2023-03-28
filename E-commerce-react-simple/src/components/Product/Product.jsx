import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='cart-heading'>{name}</h6>
                <p className='product-price'>Price ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button className="btn-cart">Add to cart</button>
        </div>
    );
};

export default Product;