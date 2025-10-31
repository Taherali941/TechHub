import React from 'react'
import FeaturedProducts from "../components/FeaturedProducts.jsx"
import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx"
import NewsletterSubscribe from "../components/NewsletterSubscribe.jsx"
import PopularCategories from "../components/PopularCategories.jsx"
const HomePage = () => {
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

export default HomePage;