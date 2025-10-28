import { useEffect, useState } from "react"
import LoginPage from "./Auth/LoginPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"

function App() {
  const[Loggedin,isLoggedin] = useState(false)
  const [currentPage, setCurrentPage] = useState("home"); 
    useEffect(()=>{
      const login = localStorage.getItem("loggedin")
      if(login === 'true'){
        isLoggedin(true)
      }
    },[])
    if(!Loggedin){
    return(<LoginPage isLoggedin = {isLoggedin}/>)
    }
  return (
    <>
    <CartProvider>
      {currentPage === "home" && (
        <HomePage onViewCart={() => setCurrentPage("cart")} />
      )}
      {currentPage === "cart" && (
        <ShoppingCart onBackToHome={() => setCurrentPage("home")} />
      )}
    </CartProvider>
    </>
  )
}

export default App
