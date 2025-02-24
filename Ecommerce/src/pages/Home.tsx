import { useState, useMemo, useEffect } from 'react'
import Filters from '../components/Filters'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/pagination/Pagination'
import ProductCard from '../components/products/ProductCard'
import { FilterState, Product } from '../types/filters'
import '../styles/home.scss'
import filterData from '../data/products.json'
import AdBanner from '../components/products/AdBanner'
import React from 'react'

const heroSlides = [
  {
    image: '/slider.png',
    title: 'Discover',
    subtitle: 'A Range Of Products',
    prefix: 'For',
    mainText: 'Gaming Professionals'
  },
  {
    image: '/Mask.png',
    title: 'Explore',
    subtitle: 'Gaming Gear',
    prefix: 'For',
    mainText: 'Pro Gamers'
  }
];

const Home = () => {
  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    categories: [],
    discounts: [],
    priceRanges: [],
    colors: [],
    ratings: []
  });
  
  const [customPriceRange, setCustomPriceRange] = useState<{
    min: number | null;
    max: number | null;
  }>({ min: null, max: null });
  
  const [sortType, setSortType] = useState('recommended');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [appliedFilters, sortType, itemsPerPage, customPriceRange]);

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const getPriceRange = (range: string): [number, number] => {
    switch (range) {
      case 'Under $25': return [0, 25];
      case '$25 to $50': return [25, 50];
      case '$50 to $100': return [50, 100];
      case '$100 to $200': return [100, 200];
      case '$200 & Above': return [200, Infinity];
      default: return [0, Infinity];
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
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
          !product.colors.some(color => appliedFilters.colors.includes(color))) {
        return false;
      }

      if (appliedFilters.ratings.length > 0 && 
          !appliedFilters.ratings.some(rating => Math.floor(product.rating) === rating)) {
        return false;
      }

      if (appliedFilters.priceRanges.length > 0) {
        const price = product.originalPrice * (1 - product.discount / 100);
        const isInAnyRange = appliedFilters.priceRanges.some(range => {
          const [min, max] = getPriceRange(range);
          return price >= min && price <= max;
        });
        if (!isInAnyRange) return false;
      }

      const discountedPrice = product.originalPrice * (1 - product.discount / 100);
      if (customPriceRange.min !== null && discountedPrice < customPriceRange.min) return false;
      if (customPriceRange.max !== null && discountedPrice > customPriceRange.max) return false;

      return true;
    });

    return filtered.sort((a, b) => {
      const getPrice = (product: Product) => product.originalPrice * (1 - product.discount / 100);
      
      switch (sortType) {
        case 'alphabetical': return a.title.localeCompare(b.title);
        case 'price-asc': return getPrice(a) - getPrice(b);
        case 'price-desc': return getPrice(b) - getPrice(a);
        default: return 0;
      }
    });
  }, [appliedFilters, sortType, customPriceRange]);

  // Pagination
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="home-page">
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].image})`,
        }}
      >
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="slider-nav-btn slider-nav-btn-prev"
          aria-label="Previous slide"
        >
          <img src="/llll.svg" alt="Previous" width={24} height={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="slider-nav-btn slider-nav-btn-next"
          aria-label="Next slide"
        >
          <img src="/arrowheroright.svg" alt="Next" width={24} height={24} />
        </button>

        <div className="container">
          <div className="hero-content">
            <h1>
              <div className="first-line">
                <span className="title">{heroSlides[currentSlide].title}</span>
                <span className="subtitle">{heroSlides[currentSlide].subtitle}</span>
              </div>
              <div className="second-line">
                <span className="prefix">{heroSlides[currentSlide].prefix}</span>
                <span className="main-text">{heroSlides[currentSlide].mainText}</span>
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
          <div className="content-layout">
            <div className="filters-sidebar">
              <Filters 
                filterData={filterData}
                onFilterChange={setAppliedFilters}
                onCustomPriceChange={(min, max) => setCustomPriceRange({ min, max })}
              />
            </div>
            
            <div className="products-content">
              <FilterBar
                totalItems={filteredProducts.length}
                onSortChange={setSortType}
                onDisplayChange={setItemsPerPage}
                currentSort={sortType}
                currentDisplay={itemsPerPage}
              />
              
              <div className="products-grid">
                {paginatedProducts.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <ProductCard {...product} />
                    {index === 3 && <AdBanner />} 
                  </React.Fragment>
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