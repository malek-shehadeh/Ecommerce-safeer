
// src/pages/Home.tsx
import { useState, useMemo, useEffect } from 'react'
import Filters from '../components/Filters'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import ProductCard from '../components/products/ProductCard'
import { FilterState } from '../types/filters'
import '../styles/home.scss'
import filterData from '../data/products.json'

const Home = () => {
  // States
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    categories: [],
    discounts: [],
    priceRanges: [],
    colors: [],
    ratings: []
  });
  const [sortType, setSortType] = useState('recommended');
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [appliedFilters, sortType, itemsPerPage]);

  const getPriceRange = (range: string): [number, number] => {
    switch (range) {
      case 'Under $25':
        return [0, 25];
      case '$25 to $50':
        return [25, 50];
      case '$50 to $100':
        return [50, 100];
      case '$100 to $200':
        return [100, 200];
      case '$200 & Above':
        return [200, Infinity];
      default:
        return [0, Infinity];
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    // Filter products
    const filtered = filterData.products.filter(product => {
      if (appliedFilters.categories.length > 0 && 
          !appliedFilters.categories.includes(product.category)) {
        return false;
      }

      if (appliedFilters.discounts.length > 0 && 
          !appliedFilters.discounts.includes(product.discount)) {
        return false;
      }

      if (appliedFilters.colors.length > 0 && 
          !appliedFilters.colors.includes(product.color)) {
        return false;
      }

      if (appliedFilters.ratings.length > 0 && 
          !appliedFilters.ratings.some(rating => Math.floor(product.rating) === rating)) {
        return false;
      }

      if (appliedFilters.priceRanges.length > 0) {
        const price = product.originalPrice;
        const isInAnyRange = appliedFilters.priceRanges.some(range => {
          const [min, max] = getPriceRange(range);
          return price >= min && price <= max;
        });
        if (!isInAnyRange) return false;
      }

      return true;
    });

    // Sort products
    return filtered.sort((a, b) => {
      switch (sortType) {
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'price-asc':
          return a.originalPrice - b.originalPrice;
        case 'price-desc':
          return b.originalPrice - a.originalPrice;
        default:
          return 0;
      }
    });
  }, [appliedFilters, sortType]);

  // Get paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
        <div className="hero-content">
  <h1>
    <div className="first-line">
      <span className="title">Discover</span>
      <span className="subtitle">A Range Of Products</span>
    </div>
    <div className="second-line">
      <span className="prefix">For</span>
      <span className="main-text">Gaming Professionals</span>
    </div>
  </h1>
  <p>
    Lorem Ipsum Is Simply Dummy Text Of The Printing 
    And Typesetting Industry. Lorem Ipsum Has Been 
    The Industry's Standard Dummy Text Ever Since The 1500s
  </p>
  <button className="discover-btn">Discover Now</button>
</div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          {/* <div className="products-header">
            <h2>Computers</h2>
          </div> */}
          
          <FilterBar
            totalItems={filteredProducts.length}
            onSortChange={setSortType}
            onDisplayChange={setItemsPerPage}
            currentSort={sortType}
            currentDisplay={itemsPerPage}
          />

          <div className="content-layout">
            <div className="filters-sidebar">
              <Filters 
                filterData={filterData}
                onFilterChange={setAppliedFilters}
              />
            </div>
            
            <div className="products-content">
              <div className="products-grid">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    rating={product.rating}
                    isNew={product.isNew}  

                  />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="pagination-container">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home