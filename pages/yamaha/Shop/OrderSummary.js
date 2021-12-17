import React from 'react';
import NavbarYamaha from "@/components/_App/NavbarYamaha";
import MainBanner from '@/components/Yamaha/Home/MainBanner';
import Footer from "@/components/_App/FooterYamaha";
import OrderSummary from '@/components/Yamaha/Shop/OrderSummary';
import PageBanner from '@/components/Common/PageBanner'; 

import Cookies from "cookies";

const Index = function ({
    dealers,
    backend,
    user,
    ...props
}) {
    return (
        <>
            <NavbarYamaha username={user} />
            <PageBanner pageTitle="Ringkasan Orderan" />
            <OrderSummary />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const backend = process.env.BACKEND_SERVER_URI;

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
        props: { backend, user }, // will be passed to the page component as props
    };
}

export default Index;