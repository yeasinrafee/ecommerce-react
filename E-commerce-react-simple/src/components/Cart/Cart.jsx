import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  let tax = (totalPrice * 7) / 100;
  let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
