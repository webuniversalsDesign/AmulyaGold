import React from 'react'
import { Link } from 'react-router-dom';
import mainLogo from '../img/companyLogo/logo.png';
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
<Link to="/" className='nav-logo'>
<img src={mainLogo} alt='logo-not-found'/>
</Link>

<ul className='nav-links ondesk'>
{/* <li><Link to="/" className='link-dec-none'>Home</Link></li> */}
{/* <li><Link to="/" className='link-dec-none'>About us</Link></li>
<li><Link to="/" className='link-dec-none'>Service</Link></li>
<li><Link to="/" className='link-dec-none'>Blogs</Link></li>
<li><Link to="/" className='link-dec-none'>Contact us</Link></li> */}
<li> <a href='mailto:info@amulyagoldbuyers.com' className='btn btn-warning'><AiOutlineMail className='nav-icons'/> info@amulyagoldbuyers.com</a></li>
<li><a href='tel:(+91) 888 40 70 700' className='btn btn-warning'><BiPhoneCall className='nav-icons'/> (+91) 888 40 70 700</a></li>

</ul>

<ul className='nav-links only-mobile'>
<li> <a href='mailto:info@amulyagoldbuyers.com' className='btn btn-warning'><AiOutlineMail className='nav-icons'/></a></li>
<li><a href='tel:(+91) 888 40 70 700' className='btn btn-warning'><BiPhoneCall className='nav-icons'/></a></li>

</ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
