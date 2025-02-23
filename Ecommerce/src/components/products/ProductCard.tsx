
// src/components/products/ProductCard.tsx
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice'
import { RootState } from '../../redux/store'
import { Product } from '../../types/product'
import ProductIcons from './ProductIcons'
import './ProductCard.scss'

interface ProductCardProps extends Product {
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
  colors
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item: Product) => item.id === id);

  const discountedPrice = originalPrice - (originalPrice * discount / 100);

  const handleWishlistClick = () => {
    const productData: Product = { id, title, image, originalPrice, discount, rating, colors };
    
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(productData));
    }
  };

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
        <div className="colors-container">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="color-indicator" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="product-price">
          <span className="current-price">{discountedPrice.toFixed(2)} JD</span>
          <div className="original-price-container">
            <span className="original-price">{originalPrice.toFixed(2)}</span>
            <span className="discount">{discount}% Off</span>
          </div>
        </div>

        <div className="product-actions">
          <ProductIcons product={{ id, title, image, originalPrice, discount, rating,colors }} />
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