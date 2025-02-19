// src/components/filters/ColorFilter.tsx
interface Props {
  colors: string[];
  selectedColors: string[];
  onColorChange: (color: string) => void;
}

const ColorFilter: React.FC<Props> = ({ colors, selectedColors, onColorChange }) => {
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