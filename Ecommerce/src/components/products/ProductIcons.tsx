// src/components/products/ProductIcons.tsx
import { FC } from 'react'

const ProductIcons: FC = () => {
  return (
    <div className="product-icons">
      <button className="icon-btn">
        <img src="/arrange-circle-2-2.svg" alt="compare" />
      </button>
      <button className="icon-btn">
        <img src="/bag2.svg" alt="add to cart" />
      </button>
    </div>
  )
}

export default ProductIcons