import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import ProductCard from '@/components/Yamaha/Product/Apparel_Detail';

import GetDetailSparepart from "api/sparepart/sparepart.js";

import Cookies from "cookies";

const Shop = function ({ detailapparel, backend, user, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <ProductCard detailapparel={detailapparel} backend={backend} user={user} />

            <Footer />
        </>
    )
}

export default Shop;

export async function getServerSideProps(context) {
    var {query} = context;
    var detailapparel = [];

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

    var res = await GetDetailSparepart.GetApparelDetail(query.s||0);
	if (res["STATUS"] === 1) {
		detailapparel = res["DATA"]["apparels"];
	}

    return {
        props: {
            detailapparel, backend, user,
        }, // will be passed to the page component as props
    };
}
