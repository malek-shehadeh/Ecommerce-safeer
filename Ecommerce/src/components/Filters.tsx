// src/components/Filters.tsx
import CategoryFilter from './filters/CategoryFilter'
import RateFilter from './filters/RateFilter'
import PriceFilter from './filters/PriceFilter'
import DiscountFilter from './filters/DiscountFilter'
import './filters/filters.scss'
import ColorFilter from './filters/ColorFilter'

const Filters = () => {
  return (
    <aside className="filters-container">
      <div className="filters-header">
        <h2>Filter</h2>
        <button className="reset-btn">Reset Filter</button>
      </div>

      <CategoryFilter />
      <DiscountFilter />
      <PriceFilter />
      <RateFilter />
      <ColorFilter />

    </aside>
  )
}

export default Filters