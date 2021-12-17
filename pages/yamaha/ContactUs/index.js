import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactUs from '@/components/Yamaha/ContactUs/ContactUs';

import Cookies from "cookies";

const Contact = function ({ user, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <PageBanner pageTitle="Contact Us" />

            <ContactUs />
           
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {

    var { req, resp } = context;
    const cookies = new Cookies(req, resp);
    var user = "";
    var userObj = (await cookies.get("user"))
        ? JSON.parse(await cookies.get("user"))
        : null;
    if (userObj) {
        let sessionId = userObj["partners_login_states"].filter(function (i) {
            return (
                i.business_partner && i.business_partner.name.toUpperCase() == "YAMAHA"
            );
        });
        if (sessionId.length != 0) user = userObj["username"];
    }
    
    return {
        props: { user }, // will be passed to the page component as props
    };
}

export default Contact;