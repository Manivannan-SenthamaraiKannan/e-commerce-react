import React from 'react'
import '../../Styles/InfoBar.css'
import { Link } from 'react-router-dom';

const InfoBar = () => {
    return (
        <div className='header-top'>
            <div className='container'>
                <div className='row'>
                    {/* Header- top -left */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='header__top__left'>
                            <ul>
                                <li><i class="bi bi-envelope"></i>vegman@gmail.com</li>
                                <li>Free Shipping for all Order of &#x20b9;699</li>
                            </ul>
                        </div>
                    </div>
                    {/* Header - top -right  */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='header__top__right'>
                            <div className="header__top__right__social">
                                <Link to={{ pathname: "https://www.facebook.com" }}><i class="bi bi-facebook"></i></Link>
                                <Link to={{ pathname: "https://www.whatsapp.com" }}><i class="bi bi-whatsapp"></i></Link>
                                <Link to={{ pathname: "https://www.instagram.com" }}><i class="bi bi-instagram"></i></Link>
                            </div>
                            <div className='header__top__right__language'>
                                <img src="src/Images/icons8-india-27.png" alt='Flag' />
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#!">Spanis</a></li>
                                    <li><a href="#!">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#!"><i class="bi bi-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoBar