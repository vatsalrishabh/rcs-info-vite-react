import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      {/* image div starts */}
      <div className="row mt-5">
        <div
          className="col p-5 "
          style={{
            backgroundImage: "url(https://rcsinfo.in/img/about.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "200px",
            
          }}
        >
          <span className="text-danger">Home</span> <span>About</span>
          <h3 className="p-4">About Us</h3>
        </div>
      </div>
      {/* image div ends */}

      {/* blanck white div with shadow starts */}
      <div className="col-12 py-5 shadow-bottom"></div>
      {/* blanck white div with shadow ends */}

      {/* content starts */}
      <div className="row-sm-12 d-md-flex">
        <div className="col-sm-12 col-md-6 py-5 mx-5">
          <h4 className="text-danger pb-5">RCS Technology</h4>

          <p>
            We are a professionally managed company with a good track record of
            extremely satisfied customers and have successfully established a
            strong customer base across the globe. RCS Technology was founded in
            2015 by a team of IT Experts. It has been functioning with a rare
            supremacy and exceptional commitment in IT filed's. We intend to be
            the leader of Website Design, Web Development, Customized Software
            Development, SEO, Web Hosting, Domain Registration, Mobile app
            development and Bulk SMS. RCS TECHNOLOGY, where your ideas shape
            into reality, we are one of the best emerging IT service company
            providing the broad range of services and solutions in Website
            design, development, logo & branding, UI Design, PHP Development,
            WordPress Development , SEO & Digital Marketing. Our digital
            Marketing is focused on the latest and the most effective strategies
            and systems that are put our client's Website in the top rankings of
            various search engine result's. Our Online Marketing strategies use
            innovative and tested methods that engage people and bring them to
            your Webpage
          </p>
        </div>
        <div className="col-9 py-5 mx-5">
          <img src="https://rcsinfo.in/img/About-Us.jpg" alt=""  style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
      {/* content ends */}
    </div>
  );
};

export default About;
