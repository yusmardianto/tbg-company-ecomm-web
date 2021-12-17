import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Sales = function ({ backend, sales, ...props }) {

    const DataSales = sales.map((data) => {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div class="jumbotron" style={{ backgroundColor: "#000" }}>
                    <div className="single-team" style={{ backgroundColor: "#000" }}>
                        <img src="/images/Sales/Logo Star.png" width="180px" alt="image" style={{ marginTop: "-50px" }} />

                        <div className="team-content">
                            <h1 style={{ color: "#fff" }}>{data.name}</h1>
                            <p style={{ color: "#fff" }}><strong>{data.job_title}</strong></p>
                        </div>
                    </div>
                    <div align="center" style={{ marginTop: "-30px" }}>
                        <Link href={`tel:${data.telp}`}>
                            <button style={{ marginRight: "10px", borderRadius: "50px", backgroundColor: "#212121", color: "#fff", padding: "15px 20px", border: "none", fontSize: "15px" }}><i class="fa fa-phone"></i> <b>CALL US</b></button>
                        </Link>
                        <Link href={`mailto:${data.email}`}>
                            <button style={{ borderRadius: "50px", backgroundColor: "#212121", color: "#fff", padding: "15px 20px", border: "none", fontSize: "15px" }}><i class="fa fa-envelope"></i> <b>EMAIL US</b></button>
                        </Link>
                        <Link href={`https://wa.me/62${data.wa}`}>
                            <button style={{ marginLeft: "10px", borderRadius: "50px", backgroundColor: "#212121", color: "#fff", padding: "15px 20px", border: "none", fontSize: "15px" }}><i class="fa fa-whatsapp"></i> <b>WA US</b></button>
                        </Link>
                    </div>
                </div>

                <div style={{ marginTop: "-30px" }}>
                    <table class="table">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "right" }} width="50%">
                                    <Link href={`tel:${data.telp}`}>
                                        <button style={{ width: "90px", marginRight: "10px", borderRadius: "50px", backgroundColor: "#000", color: "#fff", padding: "12px 16px", border: "none", fontSize: "15px" }}><i class="fa fa-phone"></i></button>
                                    </Link>
                                </th>
                                <th align="right" width="50%">{data.telp} <br /> Mobile </th>
                                <th></th>
                                <th /><th />
                            </tr>
                            <tr >
                                <th style={{ textAlign: "right" }}>
                                    <Link href={`mailto:${data.email}`}>
                                        <button style={{ width: "90px", marginRight: "10px", borderRadius: "50px", backgroundColor: "#000", color: "#fff", padding: "12px 16px", border: "none", fontSize: "15px" }}><i class="fa fa-envelope"></i></button>
                                    </Link>
                                </th>
                                <th>{data.email} <br /> Email </th>
                                <th></th>
                                <th /><th />
                            </tr>
                            <tr>
                                <th style={{ textAlign: "right" }}>
                                    <Link href="https://www.google.co.id/maps/place/Mercedes-Benz+-+PT.+THAMRIN+CITRA+ABADI/@-2.946646,104.7294956,17z/data=!3m1!4b1!4m5!3m4!1s0x2e3b7439cb4d6c0b:0xf12bc3dc2ab868f4!8m2!3d-2.9466514!4d104.7316843?hl=id">
                                        <button style={{ width: "90px", marginRight: "10px", borderRadius: "50px", backgroundColor: "#000", color: "#fff", padding: "12px 16px", border: "none", fontSize: "15px" }}><i class="fa fa-map-marker"></i></button>
                                    </Link>
                                </th>
                                <th>{data.company} <br /> {data.job_title} </th>
                                <th></th>
                                <th /><th />
                            </tr>
                            <tr>
                                <th style={{ textAlign: "right" }}>
                                    <Link href="https://www.thamrin.mercedes-benz.co.id/en/desktop/passenger-cars.html">
                                        <button style={{ width: "90px", marginRight: "10px", borderRadius: "50px", backgroundColor: "#000", color: "#fff", padding: "12px 16px", border: "none", fontSize: "15px" }}><i class="fa fa-globe"></i></button>
                                    </Link>
                                </th>
                                <th>thamrin.mercedes-benz.co.id<br /> Website </th>
                                <th></th>
                                <th /><th />
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>
        )
    })
    return (
        <div>
            {DataSales}
        </div>
    )
}

export default Sales;