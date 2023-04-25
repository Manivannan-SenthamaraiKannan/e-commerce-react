import React from 'react'
import payment from '../Images/payment.png'
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <div className='page-footer'>
            {/* Footer Head */}
            <div className='payment'>
                <p>Payment Method</p>
                <div>
                    <img src={payment} alt='payment'></img>
                </div>
            </div>
            {/* Footer Content */}
            <div className="container-fluid">
                <div className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>VegMan</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0 " style={{ color: "black" }}>About US</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0 " style={{ color: "black" }}>VM Daily</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0 " style={{ color: "black" }}>VM Instant</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0 " style={{ color: "black" }}>VM Blog</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0 " style={{ color: "black" }}>VM Now</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Help</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0" style={{ color: "black" }}>FAQ's</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0" style={{ color: "black" }}>Payments</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0" style={{ color: "black" }}>Vendor Connect</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0" style={{ color: "black" }}>Wallet</a></li>
                                <li className="nav-item mb-2"><a href="#!" className="nav-link p-0" style={{ color: "black" }}>Account</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Download Our App</h5>
                            <ul className="nav flex-column">
                                <li><i className="bi bi-apple"> App Store</i></li>
                                <li><i className="bi bi-google-play"> Play Store</i></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Get Social with us</h5>
                            <ul className="nav flex-column">
                                <li><i className="bi bi-instagram"></i> Instagram</li>
                                <li><i className="bi bi-twitter"></i> Twitter</li>
                                <li><i className="bi bi-discord"></i> Discord</li>
                                <li><i className="bi bi-whatsapp"></i> Whatsapp</li>
                            </ul>
                        </div>

                        {/* <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Get Social With us!.</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className='copyright' >
                <p>Copyright &copy; 2023 - 2025 VegMan Grocery Supplies Private Limited</p>
            </div>
        </div >
    )
}

export default Footer
