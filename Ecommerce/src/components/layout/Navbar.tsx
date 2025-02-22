
// src/components/layout/Navbar.tsx
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CartItem } from '../../types/product';
import { useState } from 'react';
import '../../styles/navbar.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const compareItems = useSelector((state: RootState) => state.compare?.items || []);
  
  const cartItemsCount = cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  const wishlistItemsCount = wishlistItems.length;
  const compareItemsCount = compareItems.length;

  const menuItems = [
    "Today's Deals",
    "Brand Store",
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Baby & Toys",
    "Beauty Care"
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCategoryMenuOpen) setIsCategoryMenuOpen(false);
  };

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  return (
    <header>
      <div className="navbar-top">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/image 2.png" alt="Safeer" />
          </Link>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <img src="/burger-menu.svg" alt="menu" />
          </button>

          <div className="location desktop-only">
  <img src="/location.svg" alt="location" />
  <span>Deliver To <span className="country">Jordan</span></span>
</div>


          <div className="search-bar desktop-only">
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

          <div className={`actions ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-search">
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
            </div>

            <div className="mobile-location">
              <img src="/location.svg" alt="location" />
              <span>Deliver To Jordan</span>
            </div>

            <button className="lang">
              <img className="iconlan" src="/language-square.svg" alt="arabic" />
              <span className="languge">العربية</span>
            </button>
            
            <button className="auth">
              <img src="/profile-circle.svg" alt="user" />
              <span className="login">Login / Sign up</span>
            </button>

            <div className="icons-group">
              <button className="arrange">
                <img src="/arrange-circle-2.svg" alt="arrange" />
                <span className="badge">{compareItemsCount}</span>
              </button>
              <Link to="/wishlist" className="wishlist">
                <img src="/heart.svg" alt="wishlist" />
                <span className="badge">{wishlistItemsCount}</span>
              </Link>
              <Link to="/cart" className="cart">
                <img src="/bag.svg" alt="cart" />
                <span className="badge">{cartItemsCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="container">
          <div className="categories-wrapper">
            <button className="categories-btn" onClick={toggleCategoryMenu}>
              <img src="/category-2.svg" alt="menu" />
              <span className="categorie">All Categories</span>
              <img 
                src="/Vector.svg" 
                alt="arrow" 
                className={`arrow-icon ${isCategoryMenuOpen ? 'open' : ''}`} 
              />
            </button>
            
            <div className={`categories-dropdown ${isCategoryMenuOpen ? 'show' : ''}`}>
              {menuItems.map((item, index) => (
                <Link key={index} to="#">{item}</Link>
              ))}
            </div>
          </div>

          <nav className="main-menu desktop-only">
            {menuItems.map((item, index) => (
              <Link key={index} to="#">{item}</Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;