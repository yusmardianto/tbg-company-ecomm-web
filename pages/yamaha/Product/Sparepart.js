import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from '@/components/Common/PageBanner';
import SparepartCard from '@/components/Yamaha/Product/Sparepart';

import GetSparepart from "api/sparepart/sparepart.js";

import Cookies from "cookies";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Router from 'next/router'

const queryClient = new QueryClient();
const handleName = values => {
    Router.push({
        pathname: '/yamaha/Product/Sparepart',
        query: (values&&values.length!=0)?{ filter: values[0]["name"] }:{},
    })
}

const Shop = function ({ selected, ygp, yamalube, helmet, apparel, accessories, backend, user, ...props }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar username={user} />

            <PageBanner pageTitle="Sparepart" />

            <SparepartCard
                ygp={ygp}
                yamalube={yamalube}
                helmet={helmet}
                apparel={apparel}
                accessories={accessories}
                backend={backend}
                selected={(selected=="")?null:selected[0]["id"]}
                handleName={handleName}
            />

            <Footer />
        </QueryClientProvider>
    )
}

export default Shop;

export async function getServerSideProps(context) {
    var ygp = [];
    var yamalube = [];
    var helmet = [];
    var apparel = [];
    var accessories = [];

    var filter = context.query.filter||"";
    var selected = "";

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

    var res = await GetSparepart.GetSparepartYGP(filter);
    if (res["STATUS"] === 1) {
        ygp = res["DATA"]["ygParts"];
        if (filter !=""){
            selected = ygp.filter((i)=>i.name==filter);
        }
    }

    var res = await GetSparepart.GetSparepartYamalube(filter);
    if (res["STATUS"] === 1) {
        yamalube = res["DATA"]["yamalubes"];
        if (filter !=""){
            selected = yamalube.filter((i)=>i.name==filter);
        }
    }

    var res = await GetSparepart.GetHelmet(filter);
    if (res["STATUS"] === 1) {
        helmet = res["DATA"]["helmets"];
        if (filter !=""){
            selected = helmet.filter((i)=>i.name==filter);
        }
    }

    var res = await GetSparepart.GetApparel(filter);
    if (res["STATUS"] === 1) {
        apparel = res["DATA"]["apparels"];
        if (filter !=""){
            selected = apparel.filter((i)=>i.name==filter);
        }
    }

    var res = await GetSparepart.GetAcc(filter);
    if (res["STATUS"] === 1) {
        accessories = res["DATA"]["accessories"];
        if (filter !=""){
            selected = accessories.filter((i)=>i.name==filter);
        }
    }

    return {
        props: {
            selected,
            ygp,
            yamalube,
            helmet,
            apparel,
            accessories,
            backend,
            user,
        }, // will be passed to the page component as props
    };
}