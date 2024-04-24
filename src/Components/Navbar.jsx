import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import rcsnavlogo from '../assets/rcs navbar logo.png'

import './Navbar.css'


const Navbar = () => {
    const navigate = useNavigate();
    function gotoAdmin(){
      
        navigate('/admin');
    }
  return (
    <div className='Navbar'>
      {/* navbar starts  */}
      <nav className="navbar navbar-primary fixed-top">
  <div className="container-fluid">
    <div className="col-4">
    <Link className="navbar-brand" to="/"><img src={rcsnavlogo} alt="dp" className='navbar-logo'/></Link>
    </div>
  

<div className="col d-none d-md-flex justify-content-end">
<div className="nav-item px-2">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </div>
        <div className="nav-item px-2">
            <Link to="/about" className="nav-link">About Us</Link>
        </div>
        <div className="nav-item px-2">
            <Link to="/services" className="nav-link">Our Services</Link>
        </div>
        <div className="nav-item px-2">
            <Link to="/internship" className="nav-link">Internship</Link>
        </div>
        <div className="nav-item px-2">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </div>
        <div className="nav-item px-2">
            <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-item px-2" style={{ backgroundColor: '#3c6092', color: 'white',height:'35px',fontSize:'20px' }}>
            <Link to="/getquote" className="nav-link">Get Quote</Link>
        </div>
</div>



    <button className="col-1 justify-content-end d-md-none d-sm-block " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-white" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">RCS Info Menu</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
{/* individual nav itmes  */}
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
          </li>
{/* individual nav itmes  */}

{/* our servvices drop down starts */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Services
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/">Web Developement</Link></li>
              <li><Link className="dropdown-item" to="/static">Static Website</Link></li>
              <li><Link className="dropdown-item" to="/dynamic">Dynamic Website</Link></li>
              <li><Link className="dropdown-item" to="/cms">CMS Website</Link></li>
              <li><Link className="dropdown-item" to="/ecom">E-Commerce</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="/mobApp">Mobile Apps</Link></li>
              <li><Link className="dropdown-item" to="/android">Android Apps</Link></li>
              <li><Link className="dropdown-item" to="/ios">iOS Apps</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="/digmarket">Digital Marketing</Link></li>
              <li><Link className="dropdown-item" to="/seo">Search Engine Optimization</Link></li>
              <li><Link className="dropdown-item" to="/smm">Social Media Marketing</Link></li>
              <li><Link className="dropdown-item" to="/payperclick">Pay Per Click</Link></li>
              <li><Link className="dropdown-item" to="/bulksms">Bulk SMS</Link></li>
              <li><Link className="dropdown-item" to="/bulkemail">Bulk Email</Link></li>
              <li><Link className="dropdown-item" to="/webhosting">Web Hosting</Link></li>
              <li><Link className="dropdown-item" to="/logo">Logo Design</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
            </ul>
          </li>
{/* Our services dropdown ends  */}
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/internship">Internship</Link>
          </li>
{/* individual nav itmes  */}
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
          </li>
{/* individual nav itmes  */}
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>
{/* individual nav itmes  */}
{/* individual nav itmes  */}
<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/getquote">Get Quote</Link>
          </li>
{/* individual nav itmes  */}
        </ul>
        {/* <form className="d-flex mt-3" role="search"> */}
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <button className="btn btn-danger" onClick={gotoAdmin} type="submit">Admin Panel</button>
        {/* </form> */}
      </div>
    </div>
  </div>
</nav>
      {/* navbar ends */}
    </div>
  )
}

export default Navbar
