// src/components/filters/DiscountFilter.tsx
const DiscountFilter = () => {
    return (
      <div className="filter-section">
        <div className="filter-header">
          <h3>Discount</h3>
          <button className="expand-btn">
            <img src="/arrow-down.svg" alt="expand" />
          </button>
        </div>
        
        <div className="filter-content">
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">5% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">15% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">25% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">35% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">50% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">75% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">80% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">85% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">90% Discount</span>
          </label>
          <label className="filter-item">
            <input type="checkbox" />
            <span className="discount-text">95% Discount</span>
          </label>
        </div>
      </div>
    )
  }
  
  export default DiscountFilter