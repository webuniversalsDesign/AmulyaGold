import React from 'react';
import {HiOutlineBuildingStorefront} from 'react-icons/hi2'
import {PiCoinsFill} from 'react-icons/pi'
import {BiSolidOffer} from 'react-icons/bi'
import {AiOutlineThunderbolt} from 'react-icons/ai'

const Howitwork = () => {
  return (
    <>
      <section className='container mt-5 mb-5'>

      <div className='header mt-5 mb-5'>
<h2 className='section-header2'  style={{color:"black"}}>How It  <span className='text-gold'>Works</span></h2>
<div className='d-flex justify-content-center'>
    <div className='underline-header'/>
</div>

{/* <div className='d-flex justify-content-center'>
<p className='header-subcontent'>Your safety and the security of your assets are our top priorities.
   We follow stringent security measures to ensure a safe and secure transaction process.
</p>
</div> */}
</div>

<div className='row'>

    <div className='col-lg-3 px-lg-4 px-4 py-3'>
    <div className='work-traps-card'>
    <div className='d-flex justify-content-center'>
        <div className='icon-bg-round  mb-4'>
<HiOutlineBuildingStorefront className='icon-bg'/>
</div>
    </div>

    <h5>Visit Our Store</h5>

    <p className='text-resp'>Walk into our conveniently located store in Bangalore.</p>


    </div>
    </div>

    <div className='col-lg-3 px-lg-4 px-4 py-3'>
    <div className='work-traps-card'>
    <div className='d-flex justify-content-center'>
        <div className='icon-bg-round  mb-4'>
<PiCoinsFill className='icon-bg'/>
</div>
    </div>

    <h5>Gold Evaluation</h5>

    <p className='text-resp'>Our experts will evaluate your gold items using the latest technology.</p>


    </div>
    </div>

    <div className='col-lg-3 px-lg-4 px-4 py-3'>
    <div className='work-traps-card'>
    <div className='d-flex justify-content-center'>
        <div className='icon-bg-round  mb-4'>
<BiSolidOffer className='icon-bg'/>
</div>
    </div>

    <h5>Receive Offer</h5>

    <p className='text-resp'> Get a competitive offer based on the current market rates.</p>


    </div>
    </div>

    <div className='col-lg-3 px-lg-4 px-4 py-3'>
    <div className='work-traps-card'>
    <div className='d-flex justify-content-center'>
        <div className='icon-bg-round  mb-4'>
<AiOutlineThunderbolt className='icon-bg'/>
</div>
    </div>

    <h5>Instant Payment</h5>

    <p className='text-resp'>Accept our offer, and receive instant cash payment.</p>


    </div>
    </div>
</div>

      </section>
    </>
  )
}

export default Howitwork
