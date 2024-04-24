import React from "react";
import homelogo from "../assets/rcs home logo.jpg";
import "./Home.css";
import slider from '../assets/slideraa.png'

const Home = () => {
  return (
    <div className="Home">
      {/* image starts  */}
      <div className="col">
        <img
          src="https://rcsinfo.in/img/slides/slider-1.jpg"
          className="img-fluid"
          alt="..."
        ></img>
      </div>
      {/* imgage ends */}

      {/* Content starts */}
      <div className="container">
        <div className="row justify-content-md-center mt-4 mb-4">
          <div className="col-md-10">
            <div className="bg-custom text-white rounded p-2 d-md-flex align-items-center justify-content-between">
              <p className="fw-bold fs-5 m-0 text-center">
                Helping Enterpreneurs and Small Business to Grow Digital and
                Financiallly
              </p>
              <button className="btn btn-danger">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      {/* Content ends */}

      {/* Content starts */}
      <div className="container">
        <div className="row mt-4 mb-4">
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
        </div>
      </div>
      {/* Content ends */}

      {/* Content3 starts */}
      <div className="container">
        <div className="row mt-4 mb-4">
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
          {/* card starts */}
          <div className="card" style={{ width: "25rem", borderRadius: "5px" }}>
            <div
              className="card-body m-3"
              style={{
                transition: "background-color 0.3s, color 0.3s",
                backgroundColor: "",
                color: "",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "red";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
              }}
            >
              <h5 className="card-title">Website Development</h5>
              <p className="card-text">
                We as a website development company, Our Developers are
                extremely talented and ready to except any challenge to develop
                a website. Our website development services includes all type of
                websites from simple to complex.
              </p>
            </div>
          </div>
          {/* card ends */}
        </div>
      </div>
      {/* Content3 ends */}

      {/* why choose us starts */}
      <div className="row mb-5">
        <div
          className="container-fluid bg-dark text-white fs-6"
          style={{
            height: "90vh",
            backgroundImage: "url(https://rcsinfo.in/img/bg.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row p-5">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row p-5 ">
            <p>
              Are you looking for website designing company in Bangalore ? Then
              hire Us, One of The Best Website Designing Company Top reason to
              hire us is:
              <ul>
                <li>
                  Proficiency in both static and dynamic website development.
                </li>
                <li>
                  Subject matter experts adept in web designing for various
                  purposes including ecommerce, responsive designs, and
                  CMS-based websites.
                </li>
                <li>
                  Skilled in working with diverse web themes, templates, and
                  developmental platforms.
                </li>
                <li>
                  Implementing a well-structured work process for efficient
                  project management.
                </li>
                <li>
                  Customization tailored to meet the specific requirements of
                  each client.
                </li>
                <li>
                  Ensuring prompt project completion with the fastest turnaround
                  time.
                </li>
                <li>
                  Offering cost-effective pricing while delivering high-quality
                  results.
                </li>
                <li>
                  Highlighting the differentiation and unique features of your
                  services.
                </li>
              </ul>
            </p>
            <p>
              We ensure to give you 100% guaranteed results with our designing
              services.
            </p>
            <div className="col">
              <button type="button" class="btn btn-success">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us ends */}

      {/* what people saying about us starts */}
      <div className="row-12">
        <div className="container text-center">
          <h3 className="wavy-text">
            What <span className="text-danger">People Saying </span>About Us
          </h3>
        </div>
      </div>
      {/* what people sayng about us ends */}

{/* carousel slider starts */}
<div className="row p-5">
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slider} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slider} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>
{/* carousel slider ends */}

{/* Our recent work starts */}
<div className="row">
    <div className="container">
        <div className="row p-5">
            <h2 className="wavy-text text-center">Our <span className="text-danger">Recent Works</span></h2>
        </div>

        <div className="row p-5">
            <div className="container">
                

            <div className="card" style={{ width: "23rem", position: "relative", overflow: "hidden" }}>
  <div className="card-content" style={{ display: "flex" }}>
    <div className="left-content" style={{ width: "0", overflow: "hidden", position: "relative", transition: "width 0.3s ease" }}>
      <div className="left-background" style={{ backgroundColor: "red", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}></div>
      <div className="left-overlay" style={{ width: "50%", height: "100%", overflow: "hidden", position: "relative" }}>
        {/* Left content here */}
      </div>
    </div>
    <div className="right-content" style={{ width: "100%", overflow: "hidden", transition: "width 0.3s ease" }}>
     <img src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg" alt="" style={{ width: "100%" }} />
    </div>
  </div>
</div>




            </div>
        </div>

        <div className="row p-5 d-flex justify-content-center">
            <div className="row-4 pb-5 d-flex justify-content-center">
            <button type="button" className="btn btn-danger btn-lg">View More of our beautifull works</button>
            </div>
            <br />
            <div className="row-4 pb-5 d-flex justify-content-center">
            <button type="button" className="btn btn-danger btn-lg">Kolkata</button>
            </div>
            
        </div>
    </div>
</div>
{/* Our recent work ends */}



    </div>
  );
};

export default Home;
