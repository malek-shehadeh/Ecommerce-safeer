
// // import { useState, useCallback } from 'react';
// // import { FilterData, FilterState, FilterType } from '../types/filters';
// // import CategoryFilter from './filters/CategoryFilter'
// // import RateFilter from './filters/RateFilter'
// // import PriceFilter from './filters/PriceFilter'
// // import DiscountFilter from './filters/DiscountFilter'
// // import ColorFilter from './filters/ColorFilter'
// // import './filters/filters.scss'

// // interface Props {
// //   filterData: FilterData;
// //   onFilterChange: (filters: FilterState) => void;
  
// // }

// // const Filters: React.FC<Props> = ({ filterData, onFilterChange }) => {
// //   const [selectedFilters, setSelectedFilters] = useState<FilterState>({
// //     categories: [],
// //     discounts: [],
// //     priceRanges: [],
// //     colors: [],
// //     ratings: []
// //   });

// //   const [isFilterOpen, setIsFilterOpen] = useState(false);

// //   const handleFilterChange = useCallback((type: FilterType, value: string | number) => {
// //     setSelectedFilters(prev => {
// //       const newFilters = {
// //         ...prev,
// //         [type]: (prev[type] as Array<typeof value>).includes(value)
// //           ? (prev[type] as Array<typeof value>).filter(item => item !== value)
// //           : [...(prev[type] as Array<typeof value>), value]
// //       };
// //       onFilterChange(newFilters);
// //       return newFilters;
// //     });
// //   }, [onFilterChange]);

// //   const handleReset = useCallback(() => {
// //     const resetFilters: FilterState = {
// //       categories: [],
// //       discounts: [],
// //       priceRanges: [],
// //       colors: [],
// //       ratings: []
// //     };
// //     setSelectedFilters(resetFilters);
// //     onFilterChange(resetFilters);
// //   }, [onFilterChange]);

// //   const FilterToggleButton = useCallback(() => (
// //     <button 
// //       className="filter-toggle-btn"
// //       onClick={() => setIsFilterOpen(prev => !prev)}
// //     >
// //       <span>Filters</span>
// //       <svg 
// //         width="20" 
// //         height="20" 
// //         viewBox="0 0 24 24" 
// //         fill="none" 
// //         stroke="currentColor" 
// //         strokeWidth="2"
// //         className={isFilterOpen ? 'rotate' : ''}
// //       >
// //         <path d="M6 9l6 6 6-6"/>
// //       </svg>
// //     </button>
// //   ), [isFilterOpen]);

// //   return (
// //     <>
// //       {/* Category Header */}
// //       <div className="category-header">
// //         <h3>Categories</h3>
// //         <h2>Computers</h2>
// //         <span className="items-count">{filterData.products.length} Items</span>
// //       </div>

// //       {/* Mobile Toggle */}
// //       <div className="mobile-filter-toggle">
// //         <FilterToggleButton />
// //       </div>

// //       {/* Filter Container */}
// //       <div className={`filters-container ${isFilterOpen ? 'show' : ''}`}>
// //         <div className="filters-header">
// //           <h2>Filter</h2>
// //           <div className="filter-header-actions">
// //             <button 
// //               className="reset-btn" 
// //               onClick={handleReset}
// //             >
// //               Reset Filter
// //             </button>
// //             <button 
// //               className="close-filter-btn"
// //               onClick={() => setIsFilterOpen(false)}
// //             >
// //               ✕
// //             </button>
// //           </div>
// //         </div>

// //         <div className="filters-content">
// //           <CategoryFilter 
// //             categories={filterData.categories}
// //             selectedCategories={selectedFilters.categories}
// //             onCategoryChange={(category) => handleFilterChange('categories', category)}
// //           />
// //           <DiscountFilter 
// //             discounts={filterData.discounts}
// //             selectedDiscounts={selectedFilters.discounts}
// //             onDiscountChange={(discount) => handleFilterChange('discounts', discount)}
// //           />
// //           <PriceFilter 
// //             priceRanges={filterData.priceRanges}
// //             selectedRanges={selectedFilters.priceRanges}
// //             onPriceChange={(range) => handleFilterChange('priceRanges', range)}
            
// //           />
// //           <RateFilter 
// //             ratings={filterData.ratings}
// //             selectedRatings={selectedFilters.ratings}
// //             onRateChange={(rating) => handleFilterChange('ratings', rating)}
// //           />
// //           <ColorFilter 
// //             colors={filterData.colors}
// //             selectedColors={selectedFilters.colors}
// //             onColorChange={(color) => handleFilterChange('colors', color)}
// //           />
// //         </div>
// //       </div>

// //       {/* Overlay for mobile */}
// //       {isFilterOpen && (
// //         <div 
// //           className="filter-overlay show" 
// //           onClick={() => setIsFilterOpen(false)}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Filters;



// import { useState, useCallback } from 'react';
// import { FilterData, FilterState, FilterType } from '../types/filters';
// import CategoryFilter from './filters/CategoryFilter'
// import RateFilter from './filters/RateFilter'
// import PriceFilter from './filters/PriceFilter'
// import DiscountFilter from './filters/DiscountFilter'
// import ColorFilter from './filters/ColorFilter'
// import './filters/filters.scss'

// interface Props {
//   filterData: FilterData;
//   onFilterChange: (filters: FilterState) => void;
//   onCustomPriceChange: (min: number | null, max: number | null) => void; // أضف هذا
// }

// const Filters: React.FC<Props> = ({ 
//   filterData, 
//   onFilterChange, 
//   onCustomPriceChange // أضف هذا
// }) => {
//   const [selectedFilters, setSelectedFilters] = useState<FilterState>({
//     categories: [],
//     discounts: [],
//     priceRanges: [],
//     colors: [],
//     ratings: []
//   });

//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const handleFilterChange = useCallback((type: FilterType, value: string | number) => {
//     setSelectedFilters(prev => {
//       const newFilters = {
//         ...prev,
//         [type]: (prev[type] as Array<typeof value>).includes(value)
//           ? (prev[type] as Array<typeof value>).filter(item => item !== value)
//           : [...(prev[type] as Array<typeof value>), value]
//       };
//       onFilterChange(newFilters);
//       return newFilters;
//     });
//   }, [onFilterChange]);

//   const handleReset = useCallback(() => {
//     const resetFilters: FilterState = {
//       categories: [],
//       discounts: [],
//       priceRanges: [],
//       colors: [],
//       ratings: []
//     };
//     setSelectedFilters(resetFilters);
//     onFilterChange(resetFilters);
//   }, [onFilterChange]);

//   const FilterToggleButton = useCallback(() => (
//     <button 
//       className="filter-toggle-btn"
//       onClick={() => setIsFilterOpen(prev => !prev)}
//     >
//       <span>Filters</span>
//       <svg 
//         width="20" 
//         height="20" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="2"
//         className={isFilterOpen ? 'rotate' : ''}
//       >
//         <path d="M6 9l6 6 6-6"/>
//       </svg>
//     </button>
//   ), [isFilterOpen]);

//   return (
//     <>
//       {/* Category Header */}
//       <div className="category-header">
//         <h3>Categories</h3>
//         <h2>Computers</h2>
//         <span className="items-count">{filterData.products.length} Items</span>
//       </div>

//       {/* Mobile Toggle */}
//       <div className="mobile-filter-toggle">
//         <FilterToggleButton />
//       </div>

//       {/* Filter Container */}
//       <div className={`filters-container ${isFilterOpen ? 'show' : ''}`}>
//         <div className="filters-header">
//           <h2>Filter</h2>
//           <div className="filter-header-actions">
//             <button 
//               className="reset-btn" 
//               onClick={handleReset}
//             >
//               Reset Filter
//             </button>
//             <button 
//               className="close-filter-btn"
//               onClick={() => setIsFilterOpen(false)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>

//         <div className="filters-content">
//           <CategoryFilter 
//             categories={filterData.categories}
//             selectedCategories={selectedFilters.categories}
//             onCategoryChange={(category) => handleFilterChange('categories', category)}
//           />
//           <DiscountFilter 
//             discounts={filterData.discounts}
//             selectedDiscounts={selectedFilters.discounts}
//             onDiscountChange={(discount) => handleFilterChange('discounts', discount)}
//           />
//           <PriceFilter 
//             priceRanges={filterData.priceRanges}
//             selectedRanges={selectedFilters.priceRanges}
//             onPriceChange={(range) => handleFilterChange('priceRanges', range)}
//             onCustomPriceChange={onCustomPriceChange} // أضف هذا
//           />
//           <RateFilter 
//             ratings={filterData.ratings}
//             selectedRatings={selectedFilters.ratings}
//             onRateChange={(rating) => handleFilterChange('ratings', rating)}
//           />
//           <ColorFilter 
//             colors={filterData.colors}
//             selectedColors={selectedFilters.colors}
//             onColorChange={(color) => handleFilterChange('colors', color)}
//           />
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {isFilterOpen && (
//         <div 
//           className="filter-overlay show" 
//           onClick={() => setIsFilterOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Filters;


import { useState, useCallback } from 'react';
import { FilterData, FilterState, FilterType } from '../types/filters';
import CategoryFilter from './filters/CategoryFilter';
import RateFilter from './filters/RateFilter';
import PriceFilter from './filters/PriceFilter';
import DiscountFilter from './filters/DiscountFilter';
import ColorFilter from './filters/ColorFilter';
import './filters/filters.scss';

interface Props {
  filterData: FilterData;
  onFilterChange: (filters: FilterState) => void;
  onCustomPriceChange: (min: number | null, max: number | null) => void; // أضف هذا
}

const Filters: React.FC<Props> = ({ 
  filterData, 
  onFilterChange, 
  onCustomPriceChange // أضف هذا
}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    categories: [],
    discounts: [],
    priceRanges: [],
    colors: [],
    ratings: []
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = useCallback((type: FilterType, value: string | number) => {
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
  }, [onFilterChange]);

  const handleReset = useCallback(() => {
    const resetFilters: FilterState = {
      categories: [],
      discounts: [],
      priceRanges: [],
      colors: [],
      ratings: []
    };
    setSelectedFilters(resetFilters);
    onFilterChange(resetFilters);
    onCustomPriceChange(null, null); // أضف هذا لإعادة تعيين النطاق السعري المخصص
  }, [onFilterChange, onCustomPriceChange]);

  const FilterToggleButton = useCallback(() => (
    <button 
      className="filter-toggle-btn"
      onClick={() => setIsFilterOpen(prev => !prev)}
    >
      <span>Filters</span>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className={isFilterOpen ? 'rotate' : ''}
      >
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>
  ), [isFilterOpen]);

  return (
    <>
      {/* Category Header */}
      <div className="category-header">
        <h3>Categories</h3>
        <h2>Computers</h2>
        <span className="items-count">{filterData.products.length} Items</span>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-filter-toggle">
        <FilterToggleButton />
      </div>

      {/* Filter Container */}
      <div className={`filters-container ${isFilterOpen ? 'show' : ''}`}>
        <div className="filters-header">
          <h2>Filter</h2>
          <div className="filter-header-actions">
            <button 
              className="reset-btn" 
              onClick={handleReset}
            >
              Reset Filter
            </button>
            <button 
              className="close-filter-btn"
              onClick={() => setIsFilterOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="filters-content">
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
            onCustomPriceChange={onCustomPriceChange} // أضف هذا
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
        </div>
      </div>

      {/* Overlay for mobile */}
      {isFilterOpen && (
        <div 
          className="filter-overlay show" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </>
  );
};

export default Filters;