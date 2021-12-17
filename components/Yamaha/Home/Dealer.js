import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Dealers = function ({ backend, dealers, ...props }) {

    const ListDealer = dealers.map((data) => {
        return (
            <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                    <img style={{ height: "250px", width: "100%", display: "block" }} src={`${backend}${data.img["url"]}`} alt="image" />

                    <div className="content">
                        <p>
                            <p><b>{data.name} - {data.kota_dealer}</b></p>
                            <p><b>{data.telp}</b></p>
                            <p><b>{data.address}</b></p>
                        </p>

                        <Link href={`${data.location}`} target="_blank">
                            <a className="read-more-btn" target="_blank">
                                View Location <Icon.MapPin />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div>
            <div className="agency-services-area pt-80 pb-50">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>Yamaha Dealers</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row justify-content-center">
                        {ListDealer}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dealers;