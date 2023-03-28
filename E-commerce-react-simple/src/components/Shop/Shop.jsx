import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //Step: 1 get ID
        for(const id in storedCart){
            //Step: 2 get the product by using id:
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){
                //Step: 3 get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //Step 4: add to added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) =>{
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);

        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    >
                    </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;