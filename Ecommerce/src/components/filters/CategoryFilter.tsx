import React, { useState } from 'react'

interface Props {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategories, onCategoryChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Categories</h3>
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
        {categories.map((category) => (
          <label key={category} className="filter-item">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter