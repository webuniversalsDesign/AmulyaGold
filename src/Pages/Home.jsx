import React, { useState } from 'react';

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
import Modal from 'react-bootstrap/Modal';



const Home = (props) => {
  const [show, setShow] = useState(true);

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

      <Modal
                show={show}
                onHide={() => setShow(false)}
                {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className=''>
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form >
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" className="form-control mt-2 pb-2" placeholder="Enter Your Name" name="from_name"  required />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="number" className="form-control mt-2 pb-2" placeholder="Enter Your Phone Number" name="contact_no"  required />
                                </div>
                               
                            </div>
                            <textarea type="text" rows='5' cols="10" className="form-control mt-2 pb-2" placeholder="Enter Your Message" name="user_message"  required></textarea>
                            <input type="submit" className="btn btn-warning mt-3" value="Send" style={{ width: "130px", fontWeight:"500" }} />
                        </form>
                    </div>
                </Modal.Body>
     </Modal>

    </>
  )
}

export default Home
