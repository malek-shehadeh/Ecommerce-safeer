// src/components/products/ProductCard.tsx
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice'
import { RootState } from '../../redux/store'
import ProductIcons from './ProductIcons'
import './ProductCard.scss'

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  originalPrice: number;
  discount: number;
  rating: number;
  isNew?: boolean; 

}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  originalPrice,
  discount,
  rating,
  isNew, 

}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isWishlisted = wishlistItems.some(item => item.id === id);

  const discountedPrice = originalPrice - (originalPrice * discount / 100);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, title, image, originalPrice, discount, rating }));
    }
  };

  const product = { id, title, image, originalPrice, discount, rating };

  return (
    <div className="product-card">
      <div className="product-image">
      {isNew && <div className="new-label">New</div>}

        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistClick}
        >
          <img src="/heart2.svg" alt="wishlist" />
        </button>
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
       
        <div className="product-price">
          <span className="current-price">{discountedPrice.toFixed(2)} JD</span>
          <div className="original-price-container">
            <span className="original-price">{originalPrice.toFixed(2)}</span>
            <span className="discount">{discount}% Off</span>
          </div>
        </div>

        <div className="product-actions">
          <ProductIcons product={product} />
          <div className="product-rating">
            <img src="/star (2).svg" alt="rating" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard