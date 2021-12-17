import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div>
            <div className="contact-info-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>
                                <h3>Mail Here</h3>
                                <p><a href="mailto:admin@startp.com">thamrin@gmail.co.id</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.Phone />
                                </div>
                                <h3>Call Here</h3>
                                <p><a href="tel:+1234567890">0711-322424</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <iframe src="https://maps.google.com/maps?q=Thamrin%20Indrapura&t=&z=17&ie=UTF8&iwloc=&output=embed"  width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>


        </div>
    )
}

export default ContactInfo;