// src/components/filters/ColorFilter.tsx
import { useState } from 'react'

const ColorFilter = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    { id: 'blue', value: '#0066CC' },
    { id: 'yellow', value: '#FFD700' },
    { id: 'orange', value: '#FF8C00' },
    { id: 'turquoise', value: '#40E0D0' },
    { id: 'purple', value: '#800080' }
  ];

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Color</h3>
        <button className="expand-btn">
          <img src="/arrow-down.svg" alt="expand" />
        </button>
      </div>
      
      <div className="filter-content">
        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`color-box ${selectedColor === color.id ? 'selected' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(selectedColor === color.id ? null : color.id)}
              aria-label={`Select ${color.id} color`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorFilter