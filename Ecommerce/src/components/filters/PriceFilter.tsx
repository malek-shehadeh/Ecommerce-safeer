
import React, { useState } from 'react'

interface Props {
  priceRanges: string[];
  selectedRanges: string[];
  onPriceChange: (range: string) => void;
}

const PriceFilter: React.FC<Props> = ({ priceRanges, selectedRanges, onPriceChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Price</h3>
        <button 
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img 
            src={isExpanded ? "/Vectorup.svg" : "/Vectordown.svg"} 
            alt="expand" 
          />
        </button>
      </div>
      
      <div 
        className="filter-content"
        style={{
          display: isExpanded ? 'flex' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
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

