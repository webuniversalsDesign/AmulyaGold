import React from 'react';
import { Link } from 'react-router-dom';
import footerImglogo from '../img/companyLogo/logo.png';
import {BiSolidPhoneCall} from 'react-icons/bi';


const Footer = () => {
  return (
    <>
           <section className='footer pt-4'>
        <div className='container'>
        <div className='row'>
        <div className='col-12 pb-4'>
        <img src={footerImglogo} className='footerlogo' alt='footer-logo-not-found'/>
        </div>
          <div className='col-lg-3 '>
          <h5 className=''>Disclaimer</h5>

<p className='color-gray text-justify '>Amulya Gold does not buy Stolen or unauthentic gold. Selling 
Stolen gold or fake gold is a criminal offense and if found person will handover to law enforcement authorities. 
Any one age of 21 or less can sell gold only with parent/guardian’s written letter.</p>
          </div>

          <div className='col-lg-6'>
            <h5>Services</h5>
            <div className='row'>
              <div className='col-6'>

                    <p className='linker-footer'><Link to="/" className="footerlink">Sell Your Gold</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">We Release Your Pledged Gold</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">We Buy Your Physical Gold</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">Trusted Gold Buyers</Link></p>
              </div>
              <div className='col-6'>

     <p className='linker-footer'><Link to="/" className="footerlink">We Buy Your Gold at Today's Market Price</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">Instant Cash for Your Gold</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">Door Step Services Available</Link></p>
            <p className='linker-footer'><Link to="/" className="footerlink">Sitemap</Link></p>
              </div>
            </div>
        
       
          </div>

          <div className='col-lg-3'>
<h5>Contact us</h5>

<p className='linker-footer'><a href='mailto:info@amulyagoldbuyers.com' className="footerlink">info@amulyagoldbuyers.com</a></p>
<p className='linker-footer'><a href='mailto:amulyagoldjdn@gmail.com' className="footerlink">amulyagoldjdn@gmail.com</a></p>
<p className='linker-footer'><a href='tel:(+91) 888 40 70 700' className="footerlink">(+91) 888 40 70 700</a></p>
<p className='linker-footer  footerlink'>9AM to 6PM All days</p>

<p className='linker-footer footerlink'>No, 54, “Girija Towers”,
3rd Floor, Palace Guttahalli Main Road, Near Dattatreya Temple , Malleshwaram,
Bengaluru - 560003.</p>
          </div>
        </div>
          
        </div>
<hr/>
        <div className='container leave-footer-space'>
        <div className='d-flex justify-content-between'>
          <p>© 2023 Design & Developed by <a href='https://webuniversals.co.in/' target='_blank' rel="noreferrer" className="footerlink font-md">Webuniversals</a></p>
        </div>
      </div>
      </section> 

<a href='tel:(+91) 888 40 70 700'>  
      <div className='cta-strap'>
      <BiSolidPhoneCall className='icon-call'/> Call Us Now
            </div>
</a>
  
    </>
  )
}

export default Footer
