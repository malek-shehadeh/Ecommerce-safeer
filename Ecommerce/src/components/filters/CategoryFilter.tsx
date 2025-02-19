// src/components/filters/CategoryFilter.tsx
// import './filters.scss'
import React from 'react'
// src/components/filters/CategoryFilter.tsx
// src/components/filters/CategoryFilter.tsx
interface Props {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Categories</h3>
      </div>
      
      <div className="filter-content">
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