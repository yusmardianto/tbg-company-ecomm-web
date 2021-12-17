import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from '@/components/Common/PageBanner';
import AboutUS from '@/components/Yamaha/AboutUs/AboutUs';

import GetLatestNews from "api/latest_news/news.js"

import Cookies from "cookies";

const News = function ({ backend, news, othernews, user, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <PageBanner pageTitle="About Us" />

            <AboutUS/>

            <Footer />
        </>
    )
}

export default News;

export async function getServerSideProps(context) {
    var news = [];
    var othernews = [];
    const backend = process.env.BACKEND_SERVER_URI;

    var res = await GetLatestNews.GetNewsYamaha();
    if (res["STATUS"] === 1) {
        news = res["DATA"]["latestNews"];
    }

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

    var res = await GetLatestNews.GetOtherNewsYamaha();
	if (res["STATUS"] === 1) {
		othernews = res["DATA"]["latestNews"];
	}

    return {
        props: { news, othernews, backend, user }, // will be passed to the page component as props
    };
}