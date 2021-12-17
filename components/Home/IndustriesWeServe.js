import React from 'react';
import Link from 'next/link';

const IndustriesWeServe = () => {
    return (
        <div id="industri" className="industries-serve-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Sektor Industri</h2>
					<div className="bar"></div>
                    <p>Kami melayani berbagai macam sektor industri, antara lain</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-car'></i>
                            </div>
                            Otomotif
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building-house'></i>
                            </div>
                            Industri Ritel 
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-credit-card'></i>
                            </div>
                            Bank
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building'></i>
                            </div>
                            Real Estate
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bxs-building'></i>
                            </div>
                            Hotel
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-restaurant'></i>
                            </div>
                            Restoran
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-brush'></i>
                            </div>
                            Percetakan
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape2">
                <img src="/images/bigdata-analytics/vector.png" alt="image" />
            </div>
        </div>
    )
}

export default IndustriesWeServe;  