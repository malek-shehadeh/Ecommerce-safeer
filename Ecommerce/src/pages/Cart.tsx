// src/pages/Cart.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import { CartItem } from '../types/product';
import '../styles/cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => {
      const discountedPrice = item.originalPrice - (item.originalPrice * item.discount / 100);
      return total + (discountedPrice * item.quantity);
    }, 0);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item: CartItem) => {
                const discountedPrice = item.originalPrice - (item.originalPrice * item.discount / 100);
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="item-image" />
                    
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <div className="price-info">
                        <span className="current-price">{discountedPrice.toFixed(2)} JD</span>
                        <span className="original-price">{item.originalPrice.toFixed(2)}</span>
                        <span className="discount">{item.discount}% Off</span>
                      </div>
                    </div>

                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>

                    <div className="item-total">
                      {(discountedPrice * item.quantity).toFixed(2)} JD
                    </div>

                    <button 
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <img src="/delete.svg" alt="remove" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <span>{calculateTotal().toFixed(2)} JD</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;