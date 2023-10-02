import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import trustIcon from '../img/secure.png';
import promice from '../img/promise.png';
import Values from '../img/values.png';
import aboutGoldImg1 from '../img/sectionImg1.png';
import aboutGoldImg2 from '../img/sectionImg2.png';
import braclateImg from '../img/jewelry.png';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
      <Navbar />

      <Banner />


      {/* Trusted, promice, values section  Start*/}

      <section className='container mt-5 mb-5 pt-lg-5 pb-lg-2'>
        <div className='row'>

          <div className='col-lg-4 col-sm-12 hover-bg'>
            <div className='d-flex justify-content-center'>
              <div className='icon-border-lined'>
                <div className='bg-circle' />
                <img src={trustIcon} alt="no-icon" className='banner-icon' />
              </div>
            </div>
            <h5 className='text-center'>The Mort Trusted Gold Buyers <br />in Bangalore</h5>
          </div>

          <div className='col-lg-4 col-sm-12 hover-bg'>
            <div className='d-flex justify-content-center'>
              <div className='icon-border-lined'>
                <div className='bg-circle' />
                <img src={promice} alt="no-icon" className='banner-icon' />
              </div>
            </div>
            <h5 className='text-center'>The Promise of  Excellence</h5>
          </div>

          <div className='col-lg-4 col-sm-12 hover-bg'>
            <div className='d-flex justify-content-center'>
              <div className='icon-border-lined'>
                <div className='bg-circle' />
                <img src={Values} alt="no-icon" className='banner-icon' />
              </div>
            </div>
            <h5 className='text-center'>Amulya Values  Your Trust</h5>
          </div>

        </div>
      </section>

      {/* Trusted, promice, values section End*/}



      {/* About us  section Start*/}

      <section className='bg-section'>
        <div className='container mt-5 mb-5 pt-lg-5 pb-lg-2'>
          <div className='row'>
            <div className='col-lg-6'>
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

            <div className='col-lg-6'>
            <div className='d-flex justify-content-center position-relative'>
            <img src={aboutGoldImg1} alt='img-not-found' className='section-img'/>
<div className='bg-sectionImg'/>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* About us  section End*/}

      {/* cash section Start */}
      <section className='bg-black mt-5 mb-5 '>
      <div className='container'>
          <div className='row align-items-center'>
        <div className='col-lg-8'>
      <h3 className='text-gold'>Cash For Gold</h3>
      <h2 className='text-white text-section-big mt-3 pb-3'>AMULYA <span className='text-gold-span'>GOLD</span> INDIA PVT LTD</h2>
      <p className='text-white text-para-sm'>The Most Trusted Gold Buyers in Bangalore</p>
      <p className='text-white text-para-sm'>We Release your Pledged Gold</p>

    <a href="tel:(+91) 888 40 70 700" className='btn btn-warning' style={{width:"150px",border:"none", marginTop:"20px",backgroundColor:"#f0931e",fontWeight:"600",lineHeight:"2"}}>Call Us Now</a>

</div>
<div className='col-lg-4'>
<img src={braclateImg} alt='img-not-found' className='container-Img'/>
</div>
      </div>
      </div>
    



      </section>
      {/* cash section End */}


      {/* We buy gold Section Start */}
      <section className="container mt-5 mb-5 pt-lg-5 pb-lg-2">
<div className='row align-items-center'>

            <div className='col-lg-6'>
            <div className='d-flex justify-content-center'>
            <img src={aboutGoldImg2} alt='img-not-found' className='section-img'/>
            </div>
            </div>

            <div className='col-lg-6'>
              {/* <h2 className='section-header mb-5'>WELCOME TO AMULYA GOLD INDIA PVT LTD</h2> */}
              <h5>Amulya Values Your Trust</h5>
              <p className='text-justify'>Entrusting with something as precious as jewellery, takes significant trust and we acknowledge and uphold your reliance on our services with utmost conviction. As one of the oldest gold jewellery buyers in Bangalore, we make sure to offer our customers the best value-added service in gold buying and selling along with our other jewellery related offerings. We use the latest advanced technology to evaluate the jewellery and maintain accuracy.</p>
              
              <h5>Pledged Gold Buyers in Bangalore</h5>
              <p className='text-justify'>Are you having trouble in releasing your pledged gold? Come to Amulya Gold Pvt Ltd for instant easy solutions. We offer all-inclusive services in gold buying and selling. Besides being one of the leading gold buyers at Bangalore, our services extend to releasing pledged gold as well from Banks, NBFC, financial institutions, and pawnbrokers.</p>
           <p>Our experienced professionals are always at your service. For any information feel free to reach out to us at (Contact Info)</p>
            </div>
</div>
      </section>
      {/* We buy gold Section End */}

      {/* Footer */}
<Footer/>

      {/* Footer */}
    </>
  )
}

export default Home
