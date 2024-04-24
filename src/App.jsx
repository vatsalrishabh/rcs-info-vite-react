import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Internship from './Components/Internship';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import GetQuote from './Components/GetQuote';
import StaticSite from './SubComponet/StaticSite';
import Dynamic from './SubComponet/Dynamic';
import Cms from './SubComponet/Cms';
import Ecomm from './SubComponet/Ecomm';
import Android from './SubComponet/Android';
import Ios from './SubComponet/Ios';
import SEO from './SubComponet/SEO';
import SocialMedia from './SubComponet/SocialMedia';
import PayPer from './SubComponet/PayPer';
import WebHosting from './SubComponet/WebHosting';
import BulkSms from './SubComponet/BulkSms';
import BulkEmai from './SubComponet/BulkEmai';
import LogoDesign from './SubComponet/LogoDesign';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getquote" element={<GetQuote />} />
        {/* sub components router starts */}
        <Route path="/static" element={<StaticSite />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/cms" element={<Cms />} />
        <Route path="/ecom" element={<Ecomm />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/smm" element={<SocialMedia />} />
        <Route path="/payperclick" element={<PayPer />} />
        <Route path="/bulksms" element={< BulkSms/>} />
        <Route path="/bulkemail" element={< BulkEmai/>} />
         <Route path="/webhosting" element={< WebHosting/>} />
         <Route path="/logo" element={< LogoDesign/>} />
      </Routes>
     <Footer/>
    </BrowserRouter>


 
  </>
  )
}

export default App
