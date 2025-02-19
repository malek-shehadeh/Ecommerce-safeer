

// src/components/layout/Navbar.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import '../../styles/navbar.scss'

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const compareItems = useSelector((state: RootState) => state.compare.items);
  
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemsCount = wishlistItems.length;
  const compareItemsCount = compareItems.length;

  return (
    <header>
      <div className="navbar-top">
        <div className="container">
          <div className="logo">
            <img src="/image 2.png" alt="Safeer" />
          </div>

          <div className="location">
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
              <button className="wishlist">
                <img src="/heart.svg" alt="wishlist" />
                <span className="badge">{wishlistItemsCount}</span>
              </button>
              <button className="cart">
                <img src="/bag.svg" alt="cart" />
                <span className="badge">{cartItemsCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="container">
          <button className="categories-btn">
            <img src="/category-2.svg" alt="menu" />
            <span className="categorie">All Categories</span>
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