// src/components/products/ProductCard.tsx
import { FC } from 'react'
import ProductIcons from './ProductIcons'
import './ProductCard.scss'

interface ProductCardProps {
  title: string
  image: string
  originalPrice: number
  discount: number
  rating: number
  isWishlisted?: boolean
  onWishlistClick?: () => void
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  originalPrice,
  discount,
  rating,
  isWishlisted = false,
  onWishlistClick
}) => {
  const discountedPrice = originalPrice - (originalPrice * discount / 100);

  return (
    <div className="product-card">
      <div className="product-image">
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={onWishlistClick}
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
          <ProductIcons />
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