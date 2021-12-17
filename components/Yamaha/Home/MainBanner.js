import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner" style={{marginTop:"-50px"}}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5">
                                <div className="hero-content">
                                    <h1><b>Exclusif Motor Untuk Anda</b></h1>
                                    <p>PT.Thamrin Brother's Yamaha merupakan sebuah bisnis company dari Thamrin Group yang bergerak dalam bidang penjualan produk Motor dan Sparepart Yamaha</p>

                                    <Link href="/yamaha/Product/Motor">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <img
                                    src='/images/Yamaha/banner.png'
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s"
                                    alt="man"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner