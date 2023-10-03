import React from 'react';
import {PiCubeTransparentLight} from 'react-icons/pi';
import {GiMoneyStack, GiPayMoney} from 'react-icons/gi';
import {TbWalletOff} from 'react-icons/tb';

const Chooseus = () => {
  return (
    <>
     <section className='bg-black pt-5 pb-5'>
<div className='container'>

<div className='header'>
<h2 className='section-header2'>Why Choose Amulya <span className='text-gold'>Gold Buyers?</span></h2>
<div className='d-flex justify-content-center'>
    <div className='underline-header'/>
</div>

<div className='d-flex justify-content-center'>
<p className='header-subcontent'>Your safety and the security of your assets are our top priorities.
   We follow stringent security measures to ensure a safe and secure transaction process.
</p>
</div>
</div>

<div className='row px-lg-5 px-1'>

<div className='col-lg-6 p-2'>
    <div className='black-card'>
        <div className='d-flex align-items-center wrap-resp'>
<div className='card-icons'>
<PiCubeTransparentLight className='r-icons'/>
</div>
<div className='card-content'>
    <h5>Transparent and Fair Evaluation</h5>
    <p className='text-resp'>Our experts use advanced techniques to assess the value of your gold accurately.
    You can trust us for a fair and transparent evaluation process.</p>
</div>
        </div>
    </div>
</div>

<div className='col-lg-6 p-2'>
    <div className='black-card'>
        <div className='d-flex align-items-center wrap-resp'>
<div className='card-icons'>
<GiMoneyStack className='r-icons'/>
</div>
<div className='card-content'>
    <h5>Competitive Prices</h5>
    <p className='text-resp'>Get the best value for your gold with our competitive prices in the Bangalore market.
    We offer rates that ensure you receive maximum returns for your valuable assets.
</p>
</div>
        </div>
    </div>
</div>

<div className='col-lg-6 p-2'>
    <div className='black-card'>
        <div className='d-flex align-items-center wrap-resp'>
<div className='card-icons'>
<GiPayMoney className='r-icons'/>
</div>
<div className='card-content'>
    <h5>Instant Cash Payment</h5>
    <p className='text-resp'>   We understand the urgency. Receive instant cash payments for your gold transactions.
   Our quick and efficient process ensures you get the money you need when you need it.

</p>
</div>
        </div>
    </div>
</div>

<div className='col-lg-6 p-2'>
    <div className='black-card'>
        <div className='d-flex align-items-center wrap-resp'>
<div className='card-icons'>
<TbWalletOff className='r-icons'/>
</div>
<div className='card-content'>
    <h5>No Hidden Fees</h5>
    <p className='text-resp'>     At Amulya Gold Buyers, we believe in transparency. There are no hidden fees or surprise deductions.
   The amount we offer is the amount you receive – simple and straightforward.
</p>
</div>
        </div>
    </div>
</div>
</div>

</div>
     </section> 
    </>
  )
}

export default Chooseus
