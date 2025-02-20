// src/components/products/ProductIcons.tsx
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToCompare } from '../../redux/slices/compareSlice'
import { Product } from '../../types/product'

interface ProductIconsProps {
  product: Product;
}

const ProductIcons: FC<ProductIconsProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleCompare = () => {
    dispatch(addToCompare(product));
  };

  return (
    <div className="product-icons">
      <button className="icon-btn" onClick={handleCompare}>
        <img src="/arrange-circle-2-2.svg" alt="compare" />
      </button>
      <button className="icon-btn" onClick={handleAddToCart}>
        <img src="/bag2.svg" alt="add to cart" />
      </button>
    </div>
  )
}

export default ProductIcons