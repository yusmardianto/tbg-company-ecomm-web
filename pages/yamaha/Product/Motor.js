import React from "react";
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from "@/components/Common/PageBanner";
import ProductCard from "@/components/Yamaha/Product/Motor";

import Getproduct from "api/product/product.js";

import Cookies from "cookies";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Router from 'next/router'
import { Search } from "react-feather";

const queryClient = new QueryClient();
const handleName = values => {
    Router.push({
        pathname: '/yamaha/Product/Motor',
        query: (values&&values.length!=0)?{ filter: values[0]["name"] }:{},
    })
}

const Shop = function ({ selected, product, backend, user, ...props }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>

                <Navbar username={user} />

                <PageBanner pageTitle="Products" />

                <ProductCard selected={(selected=="")?null:selected[0]["id"]} handleName={handleName} product={product} backend={backend} user={user} />

                <Footer />

            </QueryClientProvider>
        </>
    );
};

export default Shop;

export async function getServerSideProps(context) {
    var product = [];
    const backend = process.env.BACKEND_SERVER_URI;
    var filter = context.query.filter||"";
    var selected = "";

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
    var res = await Getproduct.GetProduct(filter);
    if (res["STATUS"] === 1) {
        product = res["DATA"]["products"];
        if (filter !=""){
            selected = product.filter((i)=>i.name==filter);
        }

    }
    
    return {
        props: {
            selected,
            product,
            backend,
            user,
        }, // will be passed to the page component as props
    };
}
