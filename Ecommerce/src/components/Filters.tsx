
// src/components/Filters.tsx
import { useState } from 'react';
import { FilterData, FilterState, FilterType } from '../types/filters';
import CategoryFilter from './filters/CategoryFilter'
import RateFilter from './filters/RateFilter'
import PriceFilter from './filters/PriceFilter'
import DiscountFilter from './filters/DiscountFilter'
import ColorFilter from './filters/ColorFilter'
import './filters/filters.scss'

interface Props {
 filterData: FilterData;
 onFilterChange: (filters: FilterState) => void;
}

const Filters: React.FC<Props> = ({ filterData, onFilterChange }) => {
 const [selectedFilters, setSelectedFilters] = useState<FilterState>({
   categories: [],
   discounts: [],
   priceRanges: [],
   colors: [],
   ratings: []
 });

 const handleFilterChange = (type: FilterType, value: string | number) => {
   setSelectedFilters(prev => {
     const newFilters = {
       ...prev,
       [type]: (prev[type] as Array<typeof value>).includes(value)
         ? (prev[type] as Array<typeof value>).filter(item => item !== value)
         : [...(prev[type] as Array<typeof value>), value]
     };
     onFilterChange(newFilters);
     return newFilters;
   });
 };

 const handleReset = () => {
   const resetFilters: FilterState = {
     categories: [],
     discounts: [],
     priceRanges: [],
     colors: [],
     ratings: []
   };
   setSelectedFilters(resetFilters);
   onFilterChange(resetFilters);
 };

 return (
   <aside className="filters-container">
     <div className="filters-header">
       <h2>Filter</h2>
       <button 
         className="reset-btn" 
         onClick={handleReset}
       >
         Reset Filter
       </button>
     </div>

     <CategoryFilter 
       categories={filterData.categories}
       selectedCategories={selectedFilters.categories}
       onCategoryChange={(category) => handleFilterChange('categories', category)}
     />
     <DiscountFilter 
       discounts={filterData.discounts}
       selectedDiscounts={selectedFilters.discounts}
       onDiscountChange={(discount) => handleFilterChange('discounts', discount)}
     />
     <PriceFilter 
       priceRanges={filterData.priceRanges}
       selectedRanges={selectedFilters.priceRanges}
       onPriceChange={(range) => handleFilterChange('priceRanges', range)}
     />
     <RateFilter 
       ratings={filterData.ratings}
       selectedRatings={selectedFilters.ratings}
       onRateChange={(rating) => handleFilterChange('ratings', rating)}
     />
     <ColorFilter 
       colors={filterData.colors}
       selectedColors={selectedFilters.colors}
       onColorChange={(color) => handleFilterChange('colors', color)}
     />
   </aside>
 )
}

export default Filters