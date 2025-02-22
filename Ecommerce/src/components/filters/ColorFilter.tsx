
import React, { useState } from 'react'

interface Props {
  colors: string[];
  selectedColors: string[];
  onColorChange: (color: string) => void;
}

const ColorFilter: React.FC<Props> = ({ colors, selectedColors, onColorChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Color</h3>
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
        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-box ${selectedColors.includes(color) ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorFilter