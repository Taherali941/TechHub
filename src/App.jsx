import { useEffect, useState } from "react"
import FeaturedProducts from "./components/FeaturedProducts.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import NewsletterSubscribe from "./components/NewsletterSubscribe.jsx"
import PopularCategories from "./components/PopularCategories.jsx"
import LoginPage from "./Auth/LoginPage.jsx"

function App() {
  const[Loggedin,isLoggedin] = useState(false)
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
      <Header />
      <Hero />
      <FeaturedProducts />
      <PopularCategories />
      <NewsletterSubscribe />
      <Footer />
    </>
  )
}

export default App
