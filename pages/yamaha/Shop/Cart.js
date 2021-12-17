import React from 'react'
import Navbar from "@/components/_App/NavbarYamaha"
import Footer from "@/components/_App/FooterYamaha"
import PageBanner from '@/components/Common/PageBanner'
import CartContent from '@/components/Yamaha/Shop/Cart'
 
import GetproductCart from 'api/shop/cart';

import Cookies from "cookies";

const Cart = function ({ cart_product, backend, user, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <PageBanner pageTitle="Cart" /> 

            <div className="cart-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <CartContent cart_product={cart_product} backend={backend}/>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Cart;

export async function getServerSideProps(context) {
    var cart_product = [];
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

    var res = await GetproductCart.GetCartProduct();
	if (res["STATUS"] === 1) {
		cart_product = res["DATA"]["carts"];
	}

    return {
        props: { cart_product, backend, user }, // will be passed to the page component as props
    };
}