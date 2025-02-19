// src/components/filters/DiscountFilter.tsx
import React from 'react'
import './filters.scss'
interface Props {
  discounts: number[];
  selectedDiscounts: number[];
  onDiscountChange: (discount: number) => void;
}

const DiscountFilter: React.FC<Props> = ({ discounts, selectedDiscounts, onDiscountChange }) => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Discount</h3>
        <button className="expand-btn">
          <img src="/arrow-down.svg" alt="expand" />
        </button>
      </div>
      
      <div className="filter-content">
        {discounts.map((discount) => (
          <label key={discount} className="filter-item">
            <input
              type="checkbox"
              checked={selectedDiscounts.includes(discount)}
              onChange={() => onDiscountChange(discount)}
            />
            <span className="discount-text">{discount}% Discount</span>
          </label>
        ))}
      </div>
    </div>
  )
}
  
  export default DiscountFilter