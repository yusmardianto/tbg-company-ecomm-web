import React from 'react';
import NavbarHome from "@/components/_App/NavbarHome";
import MainBanner from '@/components/Home/MainBanner';
import WhatWeDo from '@/components/BigdataAnalytics/WhatWeDo';
import DiscoverArea from '@/components/BigdataAnalytics/DiscoverArea';
import Services from '@/components/BigdataAnalytics/Services';
import BusineesPartner from '@/components/Home/BusineesPartner';
import TeamStyleTwo from '@/components/Home/TeamStyleTwo';
import BigdataFunFacts from '@/components/BigdataAnalytics/BigdataFunFacts';
import Feedback from '@/components/BigdataAnalytics/Feedback';
import IndustriesWeServe from '@/components/Home/IndustriesWeServe';
import Gallery from '@/components/Home/Gallery';
import BlogPost from '@/components/Home/BlogPost';
import NewsletterStyleTwo from '@/components/Home/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

const BigdataAnalytics = () => {
    return (
        <>
            <NavbarHome />
            <MainBanner />
            {/* <WhatWeDo /> */}
            {/* <DiscoverArea /> */}
            {/* <Services /> */}
            <BusineesPartner />
            <IndustriesWeServe /><br/><br/>
            <Gallery />
            {/* <TeamStyleTwo /> */}
            {/* <BigdataFunFacts /> */}
            {/* <Feedback /> */}
            {/* <TeamStyleTwo /> */}
            {/* <BlogPost /> */}
            <NewsletterStyleTwo />
            <Footer />
        </>
    )
}

export default BigdataAnalytics;