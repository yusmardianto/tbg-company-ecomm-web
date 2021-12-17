import apollo from "../../lib/apollo.js";

async function GetCheckoutproduct(token = "") {
    var res = await apollo.query(
        `
        query{
            checkouts{
              id
              transaction_id
              product_img
              {
                url
              }
              product_name
              product_color
              product_quantity
              product_total
            }
          }
        `,
        token
    );
    return res;
}

module.exports = {
    GetCheckoutproduct: GetCheckoutproduct,
};