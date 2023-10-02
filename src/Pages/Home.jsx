import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';


import Footer from '../components/Footer';
import Whyus from '../components/Whyus';
import WelcomeGold from '../components/WelcomeGold';
import CashGold from '../components/CashGold';
import BuyGold from '../components/BuyGold';



const Home = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Whyus/>
     
      <WelcomeGold/>   

      <CashGold/>

      <BuyGold/>

      <Footer/>

    </>
  )
}

export default Home
