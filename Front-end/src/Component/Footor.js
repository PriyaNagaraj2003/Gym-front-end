import React from 'react'
import { Link } from 'react-router-dom'

const Footor = () => {
    return (
     <>
            <div>
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-secondary px-5 mt-5">
                    <div className="row gx-5 ">
                        <div className="col-lg-12 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-6 col-md-12 pt-5 mb-2 ">
                                    <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                                    <div className=" mb-2 ">
                                      <p className="mb-0"><i className="bi bi-geo-alt text-primary me-2" />123 Street, Vellore, India</p>
                                    </div><br></br>
                                    <div className=" mb-2">
                                    <p className="mb-0">
                                      <i className="bi bi-envelope-open text-primary me-2" />kickstart@gmail.com</p>
                                       
                                    </div><br></br>
                                    <div className="mb-2">
                                    <p className="mb-0"> <i className="bi bi-telephone text-primary me-2" />
                                        +012 345 67890</p>
                                    </div><br></br>
                                </div>
                                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-2">
                                    <h4 className="text-uppercase  mb-4" style={{color:'white'}}>Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link className="text-secondary mb-2 " to="/"><i className="bi bi-arrow-right text-primary me-2" />Home</Link>
                                        <Link className="text-secondary mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2" />About Us</Link>
                                        <Link className="text-secondary mb-2" to="/contact"><i className="bi bi-arrow-right text-primary me-2" />Contact us</Link>
                                        <Link className="text-secondary mb-2" to="/login"><i className="bi bi-arrow-right text-primary me-2" />Login</Link>
                                        <Link className="text-secondary mb-2" to="/register"><i className="bi bi-arrow-right text-primary me-2" />Register</Link>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                     
                    </div>
                    <div>
                      <div className='row' > 
                          <div className='col-lg-4'></div>
                          <div className="col-lg-4 mb-4 ">
                                        <a className="btn btn-primary btn-square rounded-circle me-2" href="https://github.com/Sasikuma-2002" target='_blank'><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-primary btn-square rounded-circle me-2" href="https://www.facebook.com/sasi.sanjay.31" target='_blank'><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-primary btn-square rounded-circle me-2" href="https://www.linkedin.com/in/sasi-kumar-k-89040024b/" target='_blank'><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-primary btn-square rounded-circle" href="https://www.instagram.com/sasisanjay_02/" target='_blank'><i className="fab fa-instagram" /></a>
                          </div>
                      <div className='col-lg-4'></div>
  
                      </div>
                    </div>
                </div>
               
                {/* Footer End */}
            </div>
  
  
     
     </>
    )
  }
  
  export default Footor
  
