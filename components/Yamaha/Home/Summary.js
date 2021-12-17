import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Total Penjualan, Service & Dealer Yamaha</h2>
                    <div className="bar"></div>
                </div>

                <div className="row" style={{align:"center"}}>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>200</h3>
                            <p>Product Motor Terjual</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>478</h3>
                            <p>Service Motor</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>800+</h3>
                            <p>Sparepart Terjual</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>30</h3>
                            <p>Dealers yang tersebar di Sumsel & Bengkulu</p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <h3>Punya Pertanyaan ?</h3>
                    <p>Segera Hubungi Kami</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Hubungi Kami</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;