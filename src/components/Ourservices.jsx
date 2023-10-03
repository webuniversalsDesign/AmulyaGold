import React from 'react';
import goldjewelry from '../img/goldjewelry.jpg';
import goldcoin from '../img/goldcoin.jpg';
import scrapgold from '../img/scrapgold.jpg';


const Ourservices = () => {
  return (
    <>
      <section className='container pt-5 pb-5'>
      <div className='header mt-5 mb-5'>
<h2 className='section-header2'  style={{color:"black"}}> Our <span className='text-gold'>Services</span></h2>
<div className='d-flex justify-content-center'>
    <div className='underline-header'/>
</div>

{/* <div className='d-flex justify-content-center'>
<p className='header-subcontent'>Your safety and the security of your assets are our top priorities.
   We follow stringent security measures to ensure a safe and secure transaction process.
</p>
</div> */}
</div>

<div className='row pt-5 '>

    <div className='col-lg-4 pt-2 pb-2'>
        <div className='gold-card'>
<img src={goldjewelry} alt='img-not-found'/>

<h5 className='px-4 py-2'>Gold Jewelry Buying</h5>
<p className='px-4 py-2'>Sell your gold jewelry with confidence. We accept all types of gold jewelry, regardless of condition.</p>
        </div>
    </div>

    <div className='col-lg-4 pt-2 pb-2'>
        <div className='gold-card'>
<img src={goldcoin} alt='img-not-found'/>

<h5 className='px-4 py-2'>Gold Coin and Bullion Buying</h5>
<p className='px-4 py-2'>Looking to sell gold coins or bullion? We offer competitive rates for various forms of gold.</p>
        </div>
    </div>

    <div className='col-lg-4 pt-2 pb-2'>
        <div className='gold-card'>
<img src={scrapgold} alt='img-not-found'/>

<h5 className='px-4 py-2'>Broken or Scrap Gold</h5>
<p className='px-4 py-2'>Don’t let broken or scrap gold go to waste. We buy gold in any condition.</p>
        </div>
    </div>

</div>
      </section>
    </>
  )
}

export default Ourservices;
