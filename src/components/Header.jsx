import './Header.css';
const Header = ({onViewCart}) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Shopify</div>
      </div>

      <div className="header-center">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      <div className="header-right">
        <nav className="nav-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onViewCart(); }}>Categories</a>
          <a href="#">Deals</a>
          <a href="#">New Arrivals</a>
        </nav>
        <div className="icons">
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
