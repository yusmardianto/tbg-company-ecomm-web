import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Sales = function ({ backend, sales, ...props }) {

    const DataSales = sales.map((data) => {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="single-team">
                    <img src={`${backend}${data.foto["url"]}`} alt="image" />

                    <div className="team-content">
                        <div className="team-info">
                            <span>{data.name}</span><br/>
                            <span>{data.job_title}</span>
                        </div>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><Icon.Facebook /></a>
                                </Link>

                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><Icon.Twitter /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><Icon.Linkedin /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><Icon.Gitlab /></a>
                                </Link>
                            </li>
                        </ul>
                        <br /><br />
                        <Link href={"/Sales/Sales?s="+data.id}>
                            <a className="btn btn-primary">Get Started</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Mercedes Benz Sales</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    {DataSales}
                </div>
            </div>
        </div>
    )
}

export default Sales;