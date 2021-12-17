import React from 'react';
import NavbarYamaha from "@/components/_App/NavbarYamaha";
import MainBanner from '@/components/Yamaha/Home/MainBanner';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import OurServices from '@/components/Yamaha/Home/OurServices';
import FeatureProduct from '@/components/Yamaha/Home/FeatureProduct';
import Summary from '@/components/Yamaha/Home/Summary';
import Dealer from '@/components/Yamaha/Home/Dealer';
import Testimoni from '@/components/Yamaha/Home/Testimoni';
import Footer from "@/components/_App/FooterYamaha";

import Getdealer from "api/dealer/dealer.js";
import GetUser from "api/profile/profile";

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
            <MainBanner />
            {/* <PartnerStyleTwo /> */}
            <OurServices />
            <FeatureProduct />
            <Dealer dealers={dealers} user={user} backend={backend} />
            {/* <Testimoni />
            <Summary /> */}
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    var dealers = [];
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

    var res = await Getdealer.GetHomeDealer();
    if (res["STATUS"] === 1) {
        dealers = res["DATA"]["dealers"];
    }
    // console.log(userObj);
    
    return {
        props: { dealers, backend, user }, // will be passed to the page component as props
    };
}

export default Index;