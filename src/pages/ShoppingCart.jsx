import React from "react";
import './ShoppingCart.css'
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
        <Link to="/">start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <main>
        <h1>Shopping Cart</h1>
        <div className="cart-grid">
          <div className="cart-items">
            {cartItems?.map((item) => (
              <div className="cart-item" key={item?.id}>
                <div
                  className="item-image"
                  style={{ backgroundImage: `url(${item?.image})` }}
                ></div>
                <div className="item-details">
                  <div>
                    <p className="item-name">{item.name}</p>
                    <p className="item-color">{item.color}</p>
                    <p className="item-price">${item?.price}</p>
                  </div>
                  <div className="item-actions">
                    <div className="quantity">
                      <button onClick={() => updateQuantity(item?.id, -1)}>
                        -
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span className="small">Calculated at next step</span>
            </div>
            <hr />
            <div className="summary-total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="primary-btn">Proceed to Checkout</button>
            <p className="delivery-info">
              🚚 Estimated delivery: Dec 24 - Dec 28
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
