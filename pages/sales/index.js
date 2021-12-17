import React from 'react';
import TeamStyleTwo from '@/components/Sales/Sales';

import GetSales from "api/sales/sales-mercy.js";

const Sales = function ({ backend, sales, ...props }) {
    return (
        <>
            <TeamStyleTwo sales={sales} backend={backend} />
        </>
    )
}

export default Sales;

export async function getServerSideProps(context) {
    var sales = [];
    const backend = process.env.BACKEND_SERVER_URI;

    var res = await GetSales.GetSalesMerci();
    if (res["STATUS"] === 1) {
        sales = res["DATA"]["salesMercies"];
    }

    return {
        props: { sales, backend }, // will be passed to the page component as props
    };
}