import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    let tax = totalPrice*7/100;
    let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
