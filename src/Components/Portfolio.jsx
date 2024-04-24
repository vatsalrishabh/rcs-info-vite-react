import React from "react";

const Portfolio = () => {
  return (
    <div className="Portfolio">
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
          <span className="text-danger">Home</span> <span>Portfolio</span>
          <h3 className="p-4">Portfolio</h3>
        </div>
      </div>
      {/* image div ends */}

      {/* blanck white div with shadow starts */}
<div className="col-12 py-5">
          <h3 className="px-5 text-danger">Our Portfolio</h3>
   </div>
   {/* blanck white div with shadow ends */}

      {/* individula 3-3 cards colunb starts */}
      <div className="row-12 ">
        {/* card starts */}
        <div className="container d-md-flex">
        <div className="card-Holder p-3">
          <div class="card" style={{width: "25rem"}}>
            <img src="https://blog.hubspot.com/hs-fs/hubfs/how-much-website-cost_0.webp?width=595&height=400&name=how-much-website-cost_0.webp" class="card-img-top" alt="..." />
          </div>
        </div>
        {/* cards ends */}
         {/* card starts */}
         <div className="card-Holder p-3">
          <div class="card" style={{width: "25rem"}}>
            <img src="https://blog.hubspot.com/hs-fs/hubfs/how-much-website-cost_0.webp?width=595&height=400&name=how-much-website-cost_0.webp" class="card-img-top" alt="..." />
          </div>
        </div>
        {/* cards ends */}
         {/* card starts */}
         <div className="card-Holder p-3">
          <div class="card" style={{width: "25rem"}}>
            <img src="https://blog.hubspot.com/hs-fs/hubfs/how-much-website-cost_0.webp?width=595&height=400&name=how-much-website-cost_0.webp" class="card-img-top" alt="..." />
          </div>
        </div>
        {/* cards ends */}
        </div>
        
      </div>
      {/* individula 3-3 cards colunb ends */}
    </div>
  );
};

export default Portfolio;
