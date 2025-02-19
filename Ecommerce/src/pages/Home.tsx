// // src/pages/Home.tsx
// import Filters from '../components/Filters'
// import '../styles/home.scss'
// import filterData from '../data/products.json';


// const Home = () => {
//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="container">
//           <div className="hero-content">
//             <h1>
//               Discover <span>A Range Of Products</span>
//             </h1>
//             <h2>For Gaming Professionals</h2>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
//             <button className="discover-btn">Discover Now</button>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="products-section">
//         <div className="container">
//           <div className="products-header">
//             <h2>Computers</h2>
//             <span className="items-count">50 Items</span>
//           </div>
          
//           <div className="content-layout">
//             <aside className="filters-sidebar">
//             <Filters 
//   filterData={filterData}
//   onFilterChange={(filters) => {
//     // معالجة التغييرات في الفلترة
//     console.log('Applied filters:', filters);
//   }}
// />            </aside>
            
//             <main className="products-content">
//               {/* سيتم إضافة المنتجات هنا لاحقاً */}
//               <div className="products-grid">
//                 {/* المنتجات */}
//               </div>
//             </main>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home


// src/pages/Home.tsx
import Filters from '../components/Filters'
import ProductCard from '../components/products/ProductCard'
import '../styles/home.scss'
import filterData from '../data/products.json';

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
            <span className="items-count">50 Items</span>
          </div>
          
          <div className="content-layout">
            <aside className="filters-sidebar">
              <Filters 
                filterData={filterData}
                onFilterChange={(filters) => {
                  console.log('Applied filters:', filters);
                }}
              />
            </aside>
            
            <main className="products-content">
              <div className="products-grid">
                {filterData.products.map((product) => (
                  <ProductCard
                    key={product.id}
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