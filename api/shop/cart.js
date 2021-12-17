import apollo from "lib/apollo.js";

async function GetCartProduct(token = "") {
    var res = await apollo.query(
        `
        query
        {
            carts
            {
                id
                product_otr
                product_name
                product_price
                product_color
                product_img{
                    url
                }
            }
        }
      `,
        token,
    );
    return res;
}

module.exports = {
    GetCartProduct: GetCartProduct,
};