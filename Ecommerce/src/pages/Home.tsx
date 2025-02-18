// src/pages/Home.tsx
import Filters from '../components/Filters'
import '../styles/home.scss'

const Home = () => {
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
            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry...</p>
            <button className="discover-btn">Discover Now</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>Computers</h2>
            <span className="items-count">50 Items</span>
          </div>
          
          <div className="content-layout">
            <aside className="filters-sidebar">
              <Filters />
            </aside>
            
            <main className="products-content">
              {/* سيتم إضافة المنتجات هنا لاحقاً */}
              <div className="products-grid">
                {/* المنتجات */}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home