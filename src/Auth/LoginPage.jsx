import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const LoginPage = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  //  form handling
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm();

  function onSubmit(data,e){
      e.preventDefault()
      localStorage.setItem("loggedin","true")
      setIsLoggedIn(true)
      navigate('/')
    console.log('fghjk',data)
  }

  return (
    <div className="login-page">

      <main className="main-content">
        <div className="login-container">
          {/* Left Section */}
          <div className="login-form-section">
            <div className="welcome-text">
              <h1>Welcome Back</h1>
              <p>Login to continue to your account.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email or Username</label>
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  {...register(
                    'email',
                    {
                      required:true,
                      minLength:{value:3,message:"min len atleast 3"}
                    }
                  )}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register('password',
                    {
                      required:true,
                      minLength:{value:6,message:"min length atleast 6"},
                      maxLength:{value:6,message:"max length atleast 8"},
                    }
                  )}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <button type="submit" className="btn-primary"  >
                Login
              </button>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-login">
                <button className="btn-secondary">🔵 Google</button>
                <button className="btn-secondary">🍎 Apple</button>
              </div>

              <p className="register-text">
                Don't have an account?{" "}
                <a href="#" className="link">
                  Register
                </a>
              </p>
            </form>
          </div>

          {/* Right Section */}
          <div className="login-info-section">
            <div className="info-content">
              <div className="info-icon">🛍️</div>
              <h3>Join a World of Possibilities</h3>
              <p>
                Create an account to unlock a seamless shopping experience.
              </p>
            </div>

            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Faster Checkout</h4>
                  <p>Save your details for a quicker purchase process.</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Track Your Orders</h4>
                  <p>Keep an eye on your deliveries in real-time.</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Exclusive Deals</h4>
                  <p>
                    Get access to member-only discounts and special offers.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
};

export default LoginPage;
