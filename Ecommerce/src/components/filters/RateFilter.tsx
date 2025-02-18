// src/components/filters/RateFilter.tsx
import { useState } from 'react'

const RateFilter = () => {
  const [selectedRates, setSelectedRates] = useState<number[]>([]);

  const rateOptions = [
    { id: 4, goldStars: 4, label: '& Up' },
    { id: 3, goldStars: 3, label: '& Up' },
    { id: 2, goldStars: 2, label: '& Up' },
    { id: 1, goldStars: 1, label: '& Up' }
  ];

  const handleRateChange = (rateId: number) => {
    setSelectedRates(prev => {
      if (prev.includes(rateId)) {
        return prev.filter(id => id !== rateId);
      } else {
        return [...prev, rateId];
      }
    });
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Rate</h3>
        <button className="expand-btn">
          <img src="/arrow-down.svg" alt="expand" />
        </button>
      </div>
      
      <div className="filter-content">
        {rateOptions.map((option) => (
          <label key={option.id} className="filter-item">
            <input 
              type="checkbox"
              checked={selectedRates.includes(option.id)}
              onChange={() => handleRateChange(option.id)}
            />
            <div className="rate-group">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img 
                    key={index}
                    src={index < option.goldStars ? "/star.svg" : "/star (1).svg"}
                    alt="star"
                    className={`
                      ${index < option.goldStars ? 'gold-star' : 'empty-star'}
                      ${selectedRates.includes(option.id) && index < option.goldStars ? 'black-star' : ''}
                    `}
                  />
                ))}
              </div>
              <span className="up-text">{option.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

export default RateFilter