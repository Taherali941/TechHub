import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { useState,useEffect } from "react";
const Header = () => {
  const Navigate = useNavigate()
  const [checked,isChecked] = useState(false)
    useEffect(() => {
      const login = localStorage.getItem("loggedin");
      if (login === 'true') {
        isChecked(true)
      }
    });
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
          {!checked &&(
             <button onClick={()=> Navigate('/Login')}> Login</button>
          )}
          <Link to="/">Home</Link>
          <Link to="/ShoppingCart">Cart</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/NewArrival">New Arrival</Link>
          <Link to="/UserProfile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
