import React from 'react';
import Partner from "@/components/Common/Partner";
import Link from 'next/link'

const About1 = () => {
    return (
        <>
            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-one.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <div className="bar"></div>
                                    <p>Thamrin Group adalah perusahaan terkemuka di Sumatera Selatan & Bengkulu dengan fokus bisnis pada sektor otomotif dan properti.</p>
                                </div>
                                <div className="section-title">
                                    <h2>Visi</h2>
                                    <div className="bar"></div>
                                    <p>Berdampak bagi masyarakat melalui SDM yang dimiliki, pelayanan prima & pengembangan usaha secara berkelanjutan dengan membangun perusahaan yang terpercaya & memiliki reputasi yang baik.</p>
                                </div>
                                <div className="section-title">
                                    <h2>Misi</h2>
                                    <div className="bar"></div>
                                    <p>
                                        1. Melayani 21,7 juta pelanggan di tahun 2022
                                    </p><br/>
                                    <p>
                                        2. Mengembangkan pemimpin yang sukses
                                    </p><br/>
                                    <p>
                                        3. Mengelola proses administrasi yang simple & excellent
                                    </p><br/>
                                    <p>
                                        4. Mendukung continuous improvement
                                    </p><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ready-to-talk">
                <div className="container">
                    <br/><br/>
                    <h3>Ingin Info Lebih Lanjut ?</h3>
                    <p>Tanyakan Kepada Pihak Kami Untuk Info Lebih Lanjutnya</p>
                    
                    <Link href="/contact">
                        <a className="btn btn-primary">Contact Us</a>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default About1;