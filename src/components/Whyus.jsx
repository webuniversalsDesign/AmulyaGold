import React from 'react';
import trustIcon from '../img/secure.png';
import promice from '../img/promise.png';
import Values from '../img/values.png';

const Whyus = () => {
  return (
    <>
       <section className='container mt-5 mb-5 pt-lg-5 pb-lg-2 pb-5'>
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
    </>
  )
}

export default Whyus
