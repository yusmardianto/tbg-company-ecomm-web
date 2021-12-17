import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div className="iot-services-area pt-80 pb-50">
            <div className="container justify-content-center">
                <div className="section-title">
                    <h2>Yamaha 3S Service</h2>
                    <div className="bar"></div>
                    <p>Yamaha 3S Service merupakan pelayanan dari Yamaha untuk meningkatkan kupuasan pelanggan Yamaha</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-servicesss bg1">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>

                            <h3>Selling <br /> Yamaha Product Selling</h3>
                            {/* <p>Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p> */}
                            
                            <Link href="Product/Motor">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-servicesss bg10">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>

                            <h3>Services <br /> Yamaha Services Product</h3>
                            {/* <p>Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p> */}
                            
                            <Link href="/service-details">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-servicesss bg11">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>

                            <h3>Sparepart <br />Yamaha Sparepart Product</h3>
                            {/* <p>Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p> */}
                            
                            <Link href="/service-details">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
