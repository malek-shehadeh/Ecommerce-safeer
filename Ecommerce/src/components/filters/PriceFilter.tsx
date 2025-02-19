// src/components/filters/PriceFilter.tsx

import React from 'react'

interface Props {
  priceRanges: string[];
  selectedRanges: string[];
  onPriceChange: (range: string) => void;
}

const PriceFilter: React.FC<Props> = ({ priceRanges, selectedRanges, onPriceChange }) => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Price</h3>
        <button className="expand-btn">
          <img src="/arrow-down.svg" alt="expand" />
        </button>
      </div>
      
      <div className="filter-content">
        {priceRanges.map((range) => (
          <label key={range} className="filter-item">
            <input
              type="checkbox"
              checked={selectedRanges.includes(range)}
              onChange={() => onPriceChange(range)}
            />
            <span>{range}</span>
          </label>
        ))}
        
        <div className="price-range">
          <input type="text" placeholder="$ Min" />
          <input type="text" placeholder="$ Max" />
          <button className="go-btn">GO</button>
        </div>
      </div>
    </div>
  )
}
  
  export default PriceFilter