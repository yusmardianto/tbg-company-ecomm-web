import React, { useState } from "react";
import { Link } from 'react-scroll'

// import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

const NavbarStyleFour = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-color-white navbar-style-four">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="business_partner" href="/#">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/TBG-Home/Blue.png" width="250px" alt="logo" />
                            </a>
                        </Link>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/#" to="home" spy={true} smooth={true}>
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" to="business_partner" spy={true} smooth={true}>
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Business Partner
                                        </a>
                                    </Link>

                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link target="_blank" activeClassName="active" style={{marginTop:"-10px"}}>
                                                <a href="/yamaha" className="nav-link" target="_blank">Thamrin Brother's - Yamaha</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Nusa Sarana Citra Bakti - Suzuki</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Citra Lestari Mobilindo - Hino</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Citra Thamrin Motor - Honda</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://www.thamrin.mercedes-benz.co.id/en/desktop/passenger-cars.html" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Thamrin Citra Abadi - Mercedes Benz</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://www.instagram.com/palembangindahmall/?hl=id" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Musi Lestari Indo Makmur - Palembang Indah Mall</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="http://www.emilia-hotel.com/" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Musi Indah Makmur - Emilia Hotel</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="http://bprberkatsejati.com/" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Bank Perkreditan Rakyat - Berkat Sejati</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="http://homes.thamrin.xyz/" activeClassName="active" style={{marginTop:"-20px"}}>
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Thamrin Homes</a>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" to="industri" spy={true} smooth={true}>
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Industri We Serve
                                        </a>
                                    </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Founder
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Latest News
                                        </a>
                                    </Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link href="/#" to="gallery" spy={true} smooth={true}>
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Gallery
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" to="about-us" spy={true} smooth={true}>
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            About Us
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleFour;