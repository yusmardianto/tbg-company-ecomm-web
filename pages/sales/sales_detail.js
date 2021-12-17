import React from 'react';
import TeamStyleTwo from '@/components/Sales/Sales_Detail';
import Link from 'next/link';
import * as Icon from 'react-feather';

import GetSales from "api/sales/sales-mercy.js";

const Sales = function ({ backend, sales, ...props }) {

    const currentYear = new Date().getFullYear();
    return (
        <>
            <TeamStyleTwo sales={sales} backend={backend} />
            <footer className="bg-fff" style={{marginTop:"-39px"}}>
                <div className="container">
                    <div className="row">
                        <div className="copyright-area">
                            <div className="single-footer-widget">
                                <ul className="social-links" align="center">
                                    <li>
                                        <Link href="https://www.facebook.com/thamrin.mercedesbenz/" >
                                            <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/ThamrinMB" >
                                            <a className="twitter" target="_blank"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="https://www.instagram.com/thamrin.mercedesbenz/">
                                            <a className="instagram" target="_blank"><Icon.Instagram /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="https://www.youtube.com/channel/UCkU7UUVwFHaWAzRX9HXL6xQ">
                                            <a className="linkedin" target="_blank"><Icon.Youtube /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <p>Copyright &copy; {currentYear} All Right Reserved by <a href="https://thamrin.xyz/" target="_blank">@Thamrin Group </a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Sales;

export async function getServerSideProps(context) {
    var { query } = context;
    var sales = [];
    const backend = process.env.BACKEND_SERVER_URI;

    var res = await GetSales.GetDetailSalesMerci(query.s || 0);
    if (res["STATUS"] === 1) {
        sales = res["DATA"]["salesMercies"];
    }

    return {
        props: { sales, backend }, // will be passed to the page component as props
    };
}