import './LogoutPage.css'
import { useNavigate } from "react-router-dom";
const LogoutPage = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const handleClick=()=>{
      localStorage.removeItem("loggedin")
      setIsLoggedIn(false)
      navigate('/Login')
    }
  return ( 
    <div>
        {/* Logout Section */}
        <section className="logout-section">
          <div className="section-card">
            <div className="logout-container">
              <div>
                <h3>Log Out</h3>
                <p>You will be returned to the Login page</p>
              </div>
              <button className="logout-btn" onClick={handleClick}>
                <span className="material-symbols-outlined">logout</span>
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default LogoutPage