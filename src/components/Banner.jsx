import React from 'react';
import banner1 from '../img/sliderbanner/banner1.jpg'
import banner2 from '../img/sliderbanner/banner2.jpg'
import 'animate.css';

const Banner = () => {
  return (
    <>
          <div id="demo" class="carousel slide resp-carousel" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={banner1} alt="Los Angeles" class="d-block img-carousel" style={{width:"100%"}}/>
    <div class="carousel-caption-text">
      <h1 className='animate__animated animate__backInDown bannertext'>Amulya Gold India Pvt Ltd</h1>
      <p className='animate__animated animate__flipInX banner-subtext animate__delay-1s'>The Most Trusted Gold Buyers in Bangalore.</p>
      <p className='animate__animated animate__flipInX banner-subtext animate__delay-2s'>No Commission Charges, No Service Charges and No Hidden Charges</p>
    
    <a href="tel:(+91) 888 40 70 700" className='btn btn-warning' style={{width:"150px",border:"none", marginTop:"20px",backgroundColor:"#f0931e",fontWeight:"600",lineHeight:"2"}}>Call Us Now</a>
    </div>
  </div>

  <div class="carousel-item">
    <img src={banner2} alt="New York" class="d-block img-carousel" style={{width:"100%"}}/>
    {/* <div class="carousel-caption">
      <h3>New York</h3>
      <p>We love the Big Apple!</p>
    </div>   */}
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    </>
  )
}

export default Banner
