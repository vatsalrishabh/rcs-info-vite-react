import React from 'react'

const GetQuote = () => {
  return (
    <div className='Contact'>

{/* image div starts */}
<div className="row mt-5">
  <div className="col p-5 " style={{ backgroundImage: 'url(https://rcsinfo.in/img/about.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',height:'200px' }}>
        <span className='text-danger'>Home</span> <span>Get A Quote</span>
        <h3 className='p-4'>Get A Quote</h3> 
  </div>
</div>
{/* image div ends */}

{/* Get QUote form starts */}
<div className="row px-5">
    <div className="col-sm-12 col-md-6 p-5">
        <h5>Get A Quote By Filling A Form Below</h5>
        {/* form starts */}
        <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter your email'/>
  </div>
  <div className="col-md-6">
    <label for="inputName4" className="form-label">Name</label>
    <input type="name" className="form-control" id="inputName4" placeholder='Enter your name'/>
  </div>
  <div className="col-md-6">
    <label for="inputNumber4" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" id="inputNumber4" placeholder='Enter your mobile number' />
  </div>
  <div className="col-md-6">
    <label for="inputSubject4" className="form-label">Subject</label>
    <input type="name" className="form-control" id="inputSubject4" placeholder='What type of service you need'/>
  </div>

  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Address"/>
  </div>
  
 
 
  <div className="col-12">
    <button type="submit" className="btn btn-danger btn-lg">Send a message</button>
  </div>
</form>
        {/* form ends */}
    </div>

    <div className="col-sm-12 col-md-6 p-5">
        <h5>Contact Information</h5>

        <b>Address :</b>
            <p>
             No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson Super Market Vidyaranyapura Bengaluru-560097
            </p>

        <b> Phone :</b>
            <p>
            +91-9916255206, 8892823521
            </p>

 <b>Email :</b>
 <p>info@rcsinfo.in, inforcsblr@gmail.com</p>

    </div>
</div>
{/* Get Quote form ends */}





    </div>
  )
}

export default GetQuote;
