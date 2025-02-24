import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Product } from '../types/product';
import '../styles/wishlist.scss';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleMoveToCart = (item: Product) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1>My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item: Product) => {
              const discountedPrice = item.originalPrice - (item.originalPrice * item.discount / 100);
              return (
                <div key={item.id} className="wishlist-item">
                  <button 
                    className="remove-btn"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    <img src="/delete.svg" alt="remove" />
                  </button>

                  <img src={item.image} alt={item.title} className="item-image" />
                  
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <div className="price-info">
                      <span className="current-price">{discountedPrice.toFixed(2)} JD</span>
                      <span className="original-price">{item.originalPrice.toFixed(2)}</span>
                      <span className="discount">{item.discount}% Off</span>
                    </div>
                  </div>

                  <button 
                    className="move-to-cart-btn"
                    onClick={() => handleMoveToCart(item)}
                  >
                    Move to Cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;