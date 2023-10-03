import React from 'react';
import braclateImg from '../img/jewelry.png';


const CashGold = () => {
  return (
    <>
           <section className='bg-black '>
      <div className='container'>
          <div className='row align-items-center'>
        <div className='col-lg-8'>
      <h3 className='text-gold'>Cash For Gold</h3>
      <h2 className='text-white text-section-big mt-3 pb-3'>AMULYA <span className='text-gold-span'>GOLD</span> INDIA PVT LTD</h2>
      <p className='text-white text-para-sm '>The Most Trusted Gold Buyers in Bangalore</p>
      <p className='text-white text-para-sm '>We Release your Pledged Gold</p>

    <a href="tel:(+91) 888 40 70 700" className='btn btn-warning' style={{width:"150px",border:"none", marginTop:"20px",backgroundColor:"#f0931e",fontWeight:"600",lineHeight:"2"}}>Call Us Now</a>

</div>
<div className='col-lg-4'>
<img src={braclateImg} alt='img-not-found' className='container-Img'/>
</div>
      </div>
      </div>
    



      </section>
    </>
  )
}

export default CashGold
