import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const MainBanner = () => {
    return (
        <div id="home" className="bigdata-analytics-banner">
            <div className="container">
                <div className="bigdata-analytics-content">
                    <h1>Selamat Datang di Thamrin Group</h1>
                    <p>Thamrin Group adalah perusahaan terkemuka di Sumatera Selatan & Bengkulu dengan fokus bisnis pada sektor otomotif dan properti.</p>

                    <Link href="/yamaha">
                        <a className="btn btn-primary">Get Started</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;  