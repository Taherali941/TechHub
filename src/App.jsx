import { useEffect, useState } from "react"
import LoginPage from "./Auth/LoginPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import { createBrowserRouter, RouterProvider, Outlet, useNavigate, Navigate, BrowserRouter } from "react-router-dom";
import DealsPage from "./pages/DealsPage.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import NewArrival from "./pages/NewArrival.jsx"


// This is the primary component that will hold the authentication logic.
function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("loggedin");
    if (login === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const router = createBrowserRouter([
  {
    element: ( 
    <CartProvider>
      {/* Outlet renders the component for the current route */}
      <Outlet />
    </CartProvider>),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Login", element: (<LoginPage setIsLoggedIn={setIsLoggedIn}/>), },
      { path: "/ShoppingCart", element: <ShoppingCart /> },
      { path: "/deals", element: <DealsPage /> },
      { path: "/UserProfile", element: (<UserProfile setIsLoggedIn={setIsLoggedIn} />), },
      { path: "/NewArrival",element:<NewArrival />}
    ],
  },
],{basename:"/TechHub"});
return <RouterProvider router={router} />
}

export default function App(){
  return <AppContent />
}
