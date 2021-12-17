import React from 'react';
import Navbar from "@/components/_App/NavbarYamaha";
import Footer from "@/components/_App/FooterYamaha";
import PageBanner from '@/components/Common/PageBanner';
import LatestNews from '@/components/Yamaha/LatestNews/LatestNews';

import GetLatestNews from "api/latest_news/news.js"

const News = function ({ backend, news, othernews, ...props }) {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Latest News" />

            <LatestNews news={news} othernews={othernews} backend={backend} />

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

    var res = await GetLatestNews.GetOtherNewsYamaha();
	if (res["STATUS"] === 1) {
		othernews = res["DATA"]["latestNews"];
	}

    return {
        props: { news, othernews, backend }, // will be passed to the page component as props
    };
}