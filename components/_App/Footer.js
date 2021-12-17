import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/it-startup">
                                    <a>
                                        <img src="/images/TBG-Home/White.png" width="250px" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p>Thamrin Group adalah perusahaan terkemuka di Sumatera Selatan & Bengkulu dengan fokus bisnis pada sektor otomotif dan properti.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Menu</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about-1">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-1">
                                        <a>Businees Partner</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/features">
                                        <a>Industri</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        <a>Founder</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Gallery</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/faq">
                                        <a>FAQ's</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    JL. KS Tubun, No. 81 A 17 Ilir Kecamatan Ilir Timur I Kota Palembang, Sumatera Selatan 30111, Sumatera Selatan 30113
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:thamrin@gmail.co.id">thamrin@gmail.co.id</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">0711-322424</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link href="https://www.facebook.com/thamrin.group">
                                        <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/ThamrinGroup">
                                        <a className="twitter" target="_blank"><Icon.Twitter /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/thamrin.co.id/">
                                        <a className="instagram" target="_blank"><Icon.Instagram /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UCRUULlhLxKUpXK1Ti4Jrjkw">
                                        <a className="youtube" target="_blank"><Icon.Youtube /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} All Right Reserved by <a href="https://thamrin.xyz/" target="_blank">@Thamrin Group </a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 