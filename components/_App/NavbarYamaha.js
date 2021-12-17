import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

export default function NavbarYamaha({ username, ...props }) {
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
        <header id="header" className="headroom navbar-style-two">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/yamaha">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/Home/businees/ThamrinBrothers.png" width="200px" alt="logo" />
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
                                    <Link href="/yamaha" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Product <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/yamaha/Product/Motor" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Motor Product</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/yamaha/Product/Sparepart" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Sparepart Product</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://booking.thamrin.co.id/" activeClassName="active">
                                                <a target="_blank" onClick={toggleNavbar} className="nav-link">Service Product</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/yamaha/LatestNews">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Latest News
                                        </a>
                                    </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link href="/yamaha/Carrer" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Carrer
                                        </a>
                                    </Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link href="/yamaha/AboutUs">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            About Us
                                        </a>
                                    </Link>

                                </li>

                                <li className="nav-item">
                                    <Link href="/yamaha/ContactUs" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">

                            <Link href="/yamaha/login">
                                {!username || username == "" ? (
                                    <Link href="/yamaha/login">
                                        <a className="btn btn-primary">Login</a>
                                    </Link>
                                ) : (
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link" >
                                                    {username} <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/yamaha/Profile" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Profile</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/yamaha/Shop/Cart">
                                                        <a className="cart-wrapper-btn">
                                                            <Icon.ShoppingCart />
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/yamaha/Shop/Checkout" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/yamaha/Product/Sparepart" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Pesanan Saya</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <div
                                                        onClick={async (e) => {
                                                            e.preventDefault();
                                                            fetch("/api/auth/logout", {
                                                                method: "POST",
                                                                headers: {
                                                                    "Content-Type": "application/json",
                                                                },
                                                                body: JSON.stringify({ p: "YAMAHA" }),
                                                            }).then((res) => {
                                                                //if (res.ok) {
                                                                window.location.href = "../yamaha";
                                                                /*}
                                                                                    else{
                                            
                                                                                    }*/
                                                            });
                                                        }}
                                                    >
                                                        <Link href="https://booking.thamrin.co.id/" activeClassName="active">
                                                            <a target="_blank" onClick={toggleNavbar} className="nav-link">Logout</a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    //     <CustomDropdown
                                    //     noLiPadding
                                    //     navDropdown
                                    //     buttonText={
                                    //         username.length > 12 ? username.substring(0, 9) + ".." : username
                                    //     }
                                    //     buttonProps={{
                                    //         className: classes.navLink,
                                    //         color: "transparent",
                                    //     }}
                                    //     buttonIcon={Person}
                                    //     dropdownList={[
                                    //         <div
                                    //             onClick={async (e) => {
                                    //                 e.preventDefault();
                                    //                 fetch("/api/auth/logout", {
                                    //                     method: "POST",
                                    //                     headers: {
                                    //                         "Content-Type": "application/json",
                                    //                     },
                                    //                     body: JSON.stringify({ p: "YAMAHA" }),
                                    //                 }).then((res) => {
                                    //                     //if (res.ok) {
                                    //                     window.location.href = "../yamaha/home";
                                    //                     /*}
                                    //                                         else{

                                    //                                         }*/
                                    //                 });
                                    //             }}
                                    //         >
                                    //             <Link href="/yamaha/login">
                                    //                 <a className="btn btn-primary">Logout</a>
                                    //             </Link>
                                    //         </div>,
                                    //         <div>
                                    //             <Link href="/yamaha/login">
                                    //                 <a className="btn btn-primary">Profile</a>
                                    //             </Link>
                                    //         </div>,
                                    //         <div>
                                    //             <Link href="/yamaha/login">
                                    //                 <a className="btn btn-primary">Pesanan Saya</a>
                                    //             </Link>
                                    //         </div>
                                    //         // <a href="/yamaha/profile/profile" className={classes.dropdownLink}>Profile</a>,
                                    //     ]}
                                    // />
                                )}
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}