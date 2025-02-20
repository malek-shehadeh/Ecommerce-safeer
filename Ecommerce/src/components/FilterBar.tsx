// src/components/FilterBar.tsx
import { useState } from 'react';
import './FilterBar.scss';

interface FilterBarProps {
  onSortChange: (type: string) => void;
  onDisplayChange: (count: number) => void;
  totalItems: number;
  currentSort: string;  // إضافة
  currentDisplay: number;  // إضافة
}

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange, onDisplayChange, totalItems }) => {
  const [sortBy, setSortBy] = useState('recommended');
  const [displayCount, setDisplayCount] = useState(50);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onSortChange(value);
  };

  const handleDisplayChange = (value: number) => {
    setDisplayCount(value);
    onDisplayChange(value);
  };

  return (
    <div className="filter-bar">
      <div className="left-section">
        <span className="total-items">{totalItems} Items</span>
      </div>

      <div className="right-section">
        <div className="sort-section">
          <span>Sort By</span>
          <select 
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="alphabetical">Alphabetical (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>

        <div className="display-section">
          <span>Display</span>
          <select 
            value={displayCount}
            onChange={(e) => handleDisplayChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className="view-options">
          <button className="grid-view active">
            <img src="/grid-view.svg" alt="Grid view" />
          </button>
          <button className="list-view">
            <img src="/list-view.svg" alt="List view" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;