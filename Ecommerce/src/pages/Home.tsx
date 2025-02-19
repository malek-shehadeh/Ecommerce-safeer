
// src/pages/Home.tsx
import { useState, useMemo } from 'react'
import Filters from '../components/Filters'
import ProductCard from '../components/products/ProductCard'
import { FilterState } from '../types/filters'
import '../styles/home.scss'
import filterData from '../data/products.json'

const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    categories: [],
    discounts: [],
    priceRanges: [],
    colors: [],
    ratings: []
  });

  // وظيفة لتحويل نطاق السعر إلى حدود رقمية
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

  // تصفية المنتجات باستخدام useMemo لتحسين الأداء
  const filteredProducts = useMemo(() => {
    return filterData.products.filter(product => {
      // تصفية حسب الفئة
      if (appliedFilters.categories.length > 0 && 
          !appliedFilters.categories.includes(product.category)) {
        return false;
      }

      // تصفية حسب الخصم
      if (appliedFilters.discounts.length > 0 && 
          !appliedFilters.discounts.includes(product.discount)) {
        return false;
      }

      // تصفية حسب اللون
      if (appliedFilters.colors.length > 0 && 
          !appliedFilters.colors.includes(product.color)) {
        return false;
      }

      // تصفية حسب التقييم
      if (appliedFilters.ratings.length > 0 && 
          !appliedFilters.ratings.some(rating => Math.floor(product.rating) === rating)) {
        return false;
      }

      // تصفية حسب نطاق السعر
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
  }, [appliedFilters]);

  const handleFilterChange = (filters: FilterState) => {
    setAppliedFilters(filters);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Discover <span>A Range Of Products</span>
            </h1>
            <h2>For Gaming Professionals</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button className="discover-btn">Discover Now</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>Computers</h2>
            <span className="items-count">
              {filteredProducts.length} Items
            </span>
          </div>
          
          <div className="content-layout">
            <aside className="filters-sidebar">
              <Filters 
                filterData={filterData}
                onFilterChange={handleFilterChange}
              />
            </aside>
            
            <main className="products-content">
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    rating={product.rating}
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home