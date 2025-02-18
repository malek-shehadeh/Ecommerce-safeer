// src/components/layout/Navbar.tsx
import '../../styles/navbar.scss'

const Navbar = () => {
  return (
    <header>
      <div className="navbar-top">
        <div className="container">
          <div className="logo">
            {/* ضع هنا شعار Safeer */}
            <img src="/image 2.png" alt="Safeer" />
          </div>

          <div className="location">
            {/* أيقونة الموقع */}
            <img src="/location.svg" alt="location" />
            <span>Deliver To Jordan</span>
          </div>

          <div className="search-bar">
            <div className="select-wrapper">
              <select>
                <option value="all">All</option>
              </select>
              <img src="/arrow-down.svg" alt="arrow" className="select-arrow" />
            </div>
            <input type="text" placeholder="What are you looking for ?" />
            <button className="search-btn">
              <img src="/search-normal (1).svg" alt="search" />
            </button>
          </div>

          <div className="actions">
            {/* أيقونة العربية */}
            <button className="lang">
              <img src="/language-square.svg" alt="arabic" />
              <span>العربية</span>
            </button>
            
            {/* أيقونة تسجيل الدخول */}
            <button className="auth">
              <img src="/profile-circle.svg" alt="user" />
              <span>Login / Sign up</span>
            </button>

            <div className="icons-group">
              {/* أيقونة التبديل */}
              <button className="arrange">
                <img src="/arrange-circle-2.svg" alt="arrange" />
                <span className="badge">0</span>
              </button>
              {/* أيقونة المفضلة */}
              <button className="wishlist">
                <img src="/heart.svg" alt="wishlist" />
                <span className="badge">0</span>
              </button>

              {/* أيقونة عربة التسوق */}
              <button className="cart">
                <img src="/bag.svg" alt="cart" />
                <span className="badge">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="container">
          <button className="categories-btn">
            <img src="/category-2.svg" alt="menu" />
            <span>All Categories</span>
            <img src="/Vector.svg" alt="arrow" className="arrow-icon" />

          </button>

          <nav className="main-menu">
            <a href="#">Today's Deals</a>
            <a href="#">Brand Store</a>
            <a href="#">Electronics</a>
            <a href="#">Home & Kitchen</a>
            <a href="#">Fashion</a>
            <a href="#">Baby & Toys</a>
            <a href="#">Beauty Care</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar