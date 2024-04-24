import React from 'react'

const LogoDesign = () => {
  return (
    <div className='Logo-Design'>
      



      {/* image div starts */}
      <div className="row mt-5">
  <div className="col p-5 " style={{ backgroundImage: 'url(https://rcsinfo.in/img/about.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',height:'200px' }}>
        <span className='text-danger'>Home</span> <span>Logo Design</span>
        <h3 className='p-4'>Logo Design</h3> 
  </div>
</div>
{/* image div ends */}

{/* main heading starts */}
<div className="row-12">
    <div className="container p-4">
        <h2 className='text-danger'>Logo Design</h2>
    </div>
</div>
{/* main heading ends */}




{/* get a quote starts */}
<div className="row-12 border">
    <div className="container p-5 d-sm-flex">
            <div className="col-sm-12 col-md-6 ">
              <h3 className='font-weight-bold text-lg'>
              Get Special Price In Limited Period...
              </h3>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <button className='btn btn-danger btn-lg '>Get a quote</button>
            </div>
    </div>
</div>
{/* get a quote ends */}







    </div>
  )
}

export default LogoDesign
