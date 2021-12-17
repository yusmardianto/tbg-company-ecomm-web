import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from '@/components/Common/PageBanner';
import CheckoutContent from '@/components/Yamaha/Shop/Checkout';
import * as Icon from 'react-feather';

import CheckoutProduct from "api/shop/checkout";

import Cookies from "cookies";

const Checkout = function ({ backend, checkout_product, user, provinces, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <PageBanner pageTitle="Checkout" />

            <CheckoutContent user={user} checkout_product={checkout_product} backend={backend} provinces={provinces}/>

            <Footer />
        </>
    )
}

export default Checkout;

export async function getServerSideProps(context) {
    var checkout_product = [];
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
                i.business_partner &&
                i.business_partner.name.toUpperCase() == "YAMAHA"
            );
        });
        if (sessionId.length != 0) user = userObj["username"];
    }

    var res = await CheckoutProduct.GetCheckoutproduct();
    if (res["STATUS"] === 1) {
        checkout_product = res["DATA"]["checkouts"];
    }

    var provinces = [];
    var cities = [];
    var districts = [];
    var villages = [];

    var request = require("request-promise");

    var provinsi = {
        method: "GET",
        url: "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json",
        // headers: { key: "f4ac703bb25ada32478d52ef2e1cab7a" },
    };
    var provinces = await request(provinsi);

    // var kota = {
    //     method: "GET",
    //     url: "https://emsifa.github.io/api-wilayah-indonesia/api/regencies/{provinceId}.json",
    // }
    // var cities = await request(kota);

    return {
        props: { checkout_product, backend, user, provinces }, // will be passed to the page component as props
    };
}