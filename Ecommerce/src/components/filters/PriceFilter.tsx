

import React, { useState, useEffect } from 'react';

interface Props {
  priceRanges: string[];
  selectedRanges: string[];
  onPriceChange: (range: string) => void;
  onCustomPriceChange: (min: number | null, max: number | null) => void;
}

const PriceFilter: React.FC<Props> = ({ 
  priceRanges, 
  selectedRanges, 
  onPriceChange,
  onCustomPriceChange 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [error, setError] = useState<string>('');

  // إعادة تعيين الحقول عند تغيير النطاق السعري المخصص
  useEffect(() => {
    setMinPrice('');
    setMaxPrice('');
  }, [onCustomPriceChange]);

  const handleGoClick = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    // التحقق من صحة المدخلات
    if (minPrice && maxPrice && min > max) {
      setError('Maximum price should be greater than minimum');
      return;
    }

    if ((minPrice && isNaN(min)) || (maxPrice && isNaN(max))) {
      setError('Please enter valid numbers');
      return;
    }

    setError('');
    onCustomPriceChange(minPrice ? min : null, maxPrice ? max : null);

    // إفراغ الحقول بعد الضغط على GO
    setMinPrice('');
    setMaxPrice('');
  };

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
          <input 
            type="number" 
            placeholder="$ Min" 
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className={error ? 'error' : ''}
          />
          <input 
            type="number" 
            placeholder="$ Max" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className={error ? 'error' : ''}
          />
          <button 
            className="go-btn"
            onClick={handleGoClick}
          >
            GO
          </button>
        </div>
        {error && <div className="price-error">{error}</div>}
      </div>
    </div>
  );
};

export default PriceFilter;