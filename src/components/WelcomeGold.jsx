import React from 'react';
import aboutGoldImg1 from '../img/sectionImg1.png';


const WelcomeGold = () => {
  return (
    <>
         <section className='bg-section' style={{overflow:"hidden"}}>
         <div className='bg-end-section'/>
        <div className='container mt-5 pt-lg-5 pb-lg-2'>
          <div className='row'>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center position-relative'>
            <img src={aboutGoldImg1} alt='img-not-found' className='section-img position-absolute'/>

            </div>
            </div>

            <div className='col-lg-6' style={{zIndex:"11111"}}>
              <h2 className='section-header mb-5'>WELCOME TO AMULYA GOLD INDIA PVT LTD</h2>
              <h5>The Most Trusted Gold Buyers in Bangalore</h5>
              <p className='text-justify'>Sell your gold and get instant cash against it. We buy both old and new gold, 
              silver, diamond, precious stones and platinum jewellery and offer you the best market 
              price. Our process is simple and quick, saving you the usual hassle. At Amulya we maintain 
              full transparency while evaluating the jewellery, and make sure you remain witness to it. 
              We value the trust of all our customers and offer the best gold selling rate in Bangalore.</p>
              <h5>The Promise of Excellence</h5>
              <p className='text-justify'>Amulya Gold India Pvt Ltd takes pride in the expertise and skills of their team of experienced 
              professionals, who always strive to offer customers a seamless service of gold selling in Bangalore.
               Trading in jewellery comes with its intricacies that can be hard for one to understand. We make it
                an easy process for our customers with proper consultation and guidance. Customer satisfaction is
                 our priority and we leave no stone unturned 
              to deliver the best, making us the best gold buyers Bangalore.</p>
            </div>

       
          </div>

        </div>
      </section>
    </>
  )
}

export default WelcomeGold
