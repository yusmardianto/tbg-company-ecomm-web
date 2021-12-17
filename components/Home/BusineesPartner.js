// import React from 'react';
// import * as Icons from 'react-feather';
// import Link from 'next/link';

// const Features = () => {
//     return (
//         <div className="hosting-features-area pt-80 pb-50 bg-f9f6f6">
//             <div className="container">
//                 <div className="section-title">
//                     <h2>Thamrin Group Businees Partner</h2>
//                     <div className="bar"></div>
//                 </div>

//                 <div className="row">
//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <br/>
//                             <img src="/images/Home/businees/ThamrinBrothers.png" width="290px" alt="image" />
//                             <br/><br/><br/>
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Thamrin Brother's</a>
//                                 </Link>
//                             </h3>
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <img src="/images/Home/businees/Nusa Sarana Citra Bakti.png" width="200px" alt="image" />
//                             <br/><br/>
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Nusa Sarana Citra Bakti</a>
//                                 </Link>
//                             </h3>
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <div className="icon">
//                                 <Icons.Bell />
//                             </div>
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Best Analytics Audits</a>
//                                 </Link>
//                             </h3>
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <div className="icon bg-c679e3">
//                                 <Icons.Grid />
//                             </div> 
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Simple Dashboard</a>
//                                 </Link>
//                             </h3> 
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <div className="icon">
//                                 <Icons.Mail />
//                             </div>
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Email Notifications</a>
//                                 </Link>
//                             </h3>
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className="col-lg-4 col-md-6">
//                         <div className="single-hosting-features">
//                             <div className="icon bg-c679e3">
//                                 <Icons.HardDrive />
//                             </div>
//                             <h3>
//                                 <Link href="/feature-details">
//                                     <a>Deep Technical SEO</a>
//                                 </Link>
//                             </h3>
//                             <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Features;

import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div id="business_partner" className="iot-services-area pt-80 pb-50">
            <div className="container justify-content-center">
                <div className="section-title">
                    <h2>Thamrin Group Businees Partner</h2>
                    <div className="bar"></div>
                    <p>Thamrin Group mempunyai beberapa Businees Partner sebagai Unit Bisnis nya, antar lain</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg1">
                            <br/>
                            <img src="/images/Home/businees/ThamrinBrothers.png" width="290px" alt="image" />
                            <br/><br/><br/>

                            <h3>Thamrin Brothers <br /> Yamaha</h3>
                            
                            <Link href="/yamaha" target="_blank">
                                <a target="_blank"><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg2">
                            <img src="/images/Home/businees/Nusa Sarana Citra Bakti.png" width="200px" alt="image" />
                            <br/><br/>

                            <h3>Nusa Sarana Citra Bakti <br /> Suzuki</h3>
                            
                            <Link href="/coming-soon">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg3">
                            <img src="/images/Home/businees/CITRA LESTARI MOBILINDO.png" width="95px" alt="image" />
                            <br/><br/>

                            <h3>Citra Lestari Mobilindo <br />Hino</h3>
                            
                            <Link href="/coming-soon">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg4">
                            <img src="/images/Home/businees/Honda.png" width="170px" alt="image" />
                            <h3>Citra Thamrin Motor <br /> Honda</h3>
                            
                            <Link href="/coming-soon">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg5">
                            <br/>
                            <img src="/images/Home/businees/Mbenz.png" width="320px" alt="image" />
                            <br/><br/>

                            <h3>Thamrin Citra Abadi <br /> Mercedes Benz</h3>
                            
                            <Link href="https://www.thamrin.mercedes-benz.co.id/en/desktop/passenger-cars.html">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg6">
                            <br/>
                            <img src="/images/Home/businees/PIM.png" width="270px" alt="image" />
                            <br/><br/>

                            <h3>Musi Lestari Indo Makmur<br /> Palembang Indah Mall</h3>
                            
                            <Link href="https://www.instagram.com/palembangindahmall/?hl=id">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg7">
                            <img src="/images/Home/businees/Emilia.png" width="270px" alt="image" />
                            <br/><br/>

                            <h3>Musi Indah Makmur <br /> Emilia Hotel</h3>
                            
                            <Link href="http://www.emilia-hotel.com/">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg8">
                            <br/>
                            <img src="/images/Home/businees/BPR.png" width="350px" alt="image" />
                            <br/><br/><br/>

                            <h3>Bank Perkreditan Rakyat <br /> Berkat Sejati</h3>
                            
                            <Link href="bprberkatsejati.com">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg9">
                            <br/>
                            <img src="/images/Home/businees/Thamrin Homes.png" width="450px" alt="image" />
                            <br/><br/><br/>

                            <h3>Thamrin Homes</h3><br/>
                            
                            <Link href="homes.thamrin.xyz">
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

