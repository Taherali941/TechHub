import { useEffect, useState } from "react"
import LoginPage from "./Auth/LoginPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import DealsPage from "./pages/DealsPage.jsx"
import UserProfile from "./pages/UserProfile.jsx"


// This is the primary component that will hold the authentication logic.
function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("loggedin");
    if (login === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    // Render the login page if not logged in.
    // The LoginPage component should call `isLoggedIn(true)` on successful login.
    return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  }

  // Once logged in, the router will take over.
  return (
    <CartProvider>
      {/* Outlet renders the component for the current route */}
      <Outlet />
    </CartProvider>
  );
}
const router = createBrowserRouter([
  {
    element: <AppContent />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/ShoppingCart", element: <ShoppingCart /> },
      { path: "/deals", element: <DealsPage /> },
      { path: "/UserProfile", element: <UserProfile /> },
    ],
  },
]);

function App() {
  // const[Loggedin,isLoggedin] = useState(false)
  // // const [currentPage, setCurrentPage] = useState("home"); 
  //  const navigate = useNavigate();
  //   useEffect(()=>{
  //     const login = localStorage.getItem("loggedin")
  //     if(login === 'true'){
  //       isLoggedin(true)
  //     }
  //   },[])
  //   if(!Loggedin){
  //   return(<LoginPage isLoggedin = {isLoggedin}/>)
  //   }
   return (
    <>
    {/* <CartProvider>
      {currentPage === "home" && (
        <HomePage onViewCart={() => setCurrentPage("cart")} />
      )}
      {currentPage === "cart" && (
        <ShoppingCart onBackToHome={() => setCurrentPage("home")} />
      )}
    </CartProvider> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
