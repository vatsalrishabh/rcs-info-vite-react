import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
 
    <div className="row">
      <div className="Footer row-12">
        <div className="container">
          <div className="row p-3">
            {/* our servies starts */}
            <div className="col-lg-4 col-md-6 mb-5">
              <h5>Our Services</h5>
              <div className="row">
                <div className="col">
                  <li>
                    <Link to="/static-website">Static Website</Link>
                  </li>
                  <li>
                    <Link to="/cms-website">CMS Website</Link>
                  </li>
                  <li>
                    <Link to="/android-app">Android Apps</Link>
                  </li>
                  <li>
                    <Link to="/seo">SEO</Link>
                  </li>
                  <li>
                    <Link to="/pay-per-click">Pay Per Click</Link>
                  </li>
                  <li>
                    <Link to="/web-hosting">Web Hosting</Link>
                  </li>
                </div>

                <div className="col">
                  <li>
                    <Link to="/dynamic-web">Dynamic Website</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce">E-Commerce</Link>
                  </li>
                  <li>
                    <Link to="/ios">iOS App</Link>
                  </li>
                  <li>
                    <Link to="/smo">SMO</Link>
                  </li>
                  <li>
                    <Link to="/bulk-message">Bulk Message</Link>
                  </li>
                  <li>
                    <Link to="/logo-design">Logo Design</Link>
                  </li>
                </div>
              </div>
            </div>
            {/* our services ends  */}

            {/* get in touch starts */}
            <div className="col-lg-4 col-md-6 mb-5">
              <h5>Get In Touch</h5>
              <p>
                No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson
                Super Market Vidyaranyapura Bengaluru-560097
              </p>
              <div className="col">
                <p>
                  <a href="tel:+91-8828923521">Phone: +91-8828923521</a>
                </p>

                <p>
                  <a href="mailto:info@rcsinfo.in">Email: info@rcsinfo.in</a>
                </p>

                <p></p>
              </div>
            </div>
            {/* get in touch ends */}

            {/* Navigate us starts */}
            <div className="col-lg-4 col-md-12">
              <h5>Navigate Us</h5>
              <div class="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248711.57539711113!2d77.37131745278907!3d13.09168415763673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1713700816945!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Navigate us ends */}

          {/* Copyright starts */}
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
          {/* Copyright ends */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
