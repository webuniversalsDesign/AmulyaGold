import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';


import Footer from '../components/Footer';
import Whyus from '../components/Whyus';
import WelcomeGold from '../components/WelcomeGold';
import CashGold from '../components/CashGold';
import BuyGold from '../components/BuyGold';
import Chooseus from '../components/Chooseus';
import Howitwork from '../components/Howitwork';
import Ourservices from '../components/Ourservices';



const Home = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Whyus/>
     
      <WelcomeGold/>   

      <Chooseus/>

      <CashGold/>

      {/* <BuyGold/> */}

<Ourservices/>

     <Howitwork/>



      <Footer/>

    </>
  )
}

export default Home
