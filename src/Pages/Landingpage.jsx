import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import PopularProduct from '../Components/PopularProduct'
import DealsoftheDay from '../Components/DealsoftheDay'
import Coupon from '../Components/Coupon'
import Offer from '../Components/Offer'
import Membership from '../Components/Membership'
import Newsletter from '../Components/Newsletter'
import Howitworks from '../Components/Howitworks'
import Download from '../Components/Download'
import Footer from '../Components/Footer'
import Categorie from '../Components/Categorie'

const Landingpage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <PopularProduct/>
      <DealsoftheDay/>
      <Coupon/>
      <Offer/>
      <Membership/>
      <Newsletter/>
      <Howitworks/>
      <Download/>
      <Categorie/>
      <Footer/>
    </>
  )
}

export default Landingpage
