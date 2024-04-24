import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>

{/* image div starts */}
<div className="row mt-5">
  <div className="col p-5 " style={{ backgroundImage: 'url(https://rcsinfo.in/img/about.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',height:'200px' }}>
        <span className='text-danger'>Home</span> <span>Contact</span>
        <h3 className='p-4'>Get In Touch</h3> 
  </div>
</div>
{/* image div ends */}

{/* contact form starts */}
<div className="row px-5">
    <div className="col-sm-12 col-md-6 p-5">
        <h5>Get In Touch With Us</h5>
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
{/* contact form ends */}

{/* map starts */}
<div className="row-sm-12">
    <div className="col-12 p-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124355.78769855556!2d77.3932957649231!3d13.09168415763673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1713893544104!5m2!1sen!2sin"  style={{ width: "100%", height: "60vh", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
{/* map ends */}


    </div>
  )
}

export default Contact
