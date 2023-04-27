import React from 'react'
import '../../Styles/InfoBar.css'

const InfoBar = () => {
    return (
        // <div className='header-top'>
        //     <div className='container'>
        //         <div className='row'>
        //             {/* Header- top -left */}
        //             <div className='col-lg-6 col-md-6'>
        //                 <div className='header__top__left'>
        //                     <ul className='list_style_left'>
        //                         <li><i class="bi bi-envelope"></i> vegman@gmail.com</li>
        //                         <li>Free Shipping for all Order of &#x20b9;699</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             {/* Header - top -right  */}
        //             <div className='col-lg-6 col-md-6'>
        //                 <div className='header__top__right'>
        //                     <div className="header__top__right__social">
        //                         <a href='#!'><i class="bi bi-facebook" style={{ color: "black" }}></i></a>
        //                         <a href='#!'><i class="bi bi-whatsapp" style={{ color: "black" }}></i></a>
        //                         <a href='#!'><i class="bi bi-instagram" style={{ color: "black" }}></i></a>
        //                     </div>
        //                     <div className='header__top__right__language'>
        //                         <li class="nav-item dropdown" style={{ "list-style-type" : "none"}}>
        //                             <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                 <span><i class="flag flag-us"></i></span> English
        //                             </a>
        //                             <ul class="dropdown-menu">
        //                                 <li><a class="dropdown-item" href="#!">Spanish</a></li>
        //                                 <li><a class="dropdown-item" href="#!">English</a></li>
        //                             </ul>
        //                         </li>
        //                     </div>
        //                     <div class="header__top__right__auth">
        //                         <a href="#!" className='nav-link'><i class="bi bi-person" style={{ color: "black" }}></i>
        //                         <span> Login</span></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='info bar' style={{ backgroundColor: "lightgreen" }}>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-md-4">
                        <p style={{ color: "whitesmoke" }}><i className="bi bi-envelope"></i> vegman@gmail.com</p>
                    </div>
                    <div className='col-md-4'>
                        <p style={{ color: "whitesmoke" }}>*Free delivery for order above 699.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-instagram" style={{ paddingLeft: "1rem", color: "whitesmoke" }}></i>
                        <i className="bi bi-twitter" style={{ paddingLeft: "1rem", color: "whitesmoke" }}></i>
                        <i className="bi bi-whatsapp" style={{ paddingLeft: "1rem", color: "whitesmoke" }}></i>
                        <i className="bi bi-facebook" style={{ paddingLeft: "1rem", color: "whitesmoke" }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoBar