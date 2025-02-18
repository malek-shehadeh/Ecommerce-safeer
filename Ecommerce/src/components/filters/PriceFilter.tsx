// src/components/filters/PriceFilter.tsx
const PriceFilter = () => {
    return (
      <div className="filter-section">
        <div className="filter-header">
          <h3>Price</h3>
          <button className="expand-btn">
            <img src="/arrow-down.svg" alt="expand" />
          </button>
        </div>
        
        <div className="filter-content">
          <label className="filter-item">
            <input type="checkbox" />
            <span>Under $75</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span>$75 to $150</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span>$150 to $300</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span>$300 & Above</span>
          </label>
  
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