// src/components/filters/RateFilter.tsx

interface Props {
  ratings: number[];
  selectedRatings: number[];
  onRateChange: (rating: number) => void;
}

const RateFilter: React.FC<Props> = ({ ratings, selectedRatings, onRateChange }) => {
  const rateOptions = ratings.map(rate => ({
    id: rate,
    goldStars: rate,
    label: '& Up'
  })).sort((a, b) => b.id - a.id); 

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
              checked={selectedRatings.includes(option.id)}
              onChange={() => onRateChange(option.id)}
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
                      ${selectedRatings.includes(option.id) && index < option.goldStars ? 'black-star' : ''}
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