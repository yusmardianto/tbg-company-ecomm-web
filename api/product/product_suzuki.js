import apollo from "../../lib/apollo.js";

async function GetProductSuzuki(token = "") {
  var res = await apollo.query(
    `
    query{
      productsSuzukis{
        id
        name
        description
        price1
        price2
        img{
          url
        }
      }
    }

    `,
    token
  );
  return res;
}

async function GetDetailProduct(id, token = "") {
  var res = await apollo.query(
    `
    query($input: ID!){
      productsSuzukis(where:{id:$input})
      {
        id
        name
        price1
        price2
        description
        stock
        img{
          url
        }
      }
    }	`,
    token, {
      "input": id
    }
  );
  return res;
}

module.exports = {
  GetProductSuzuki: GetProductSuzuki,
  GetDetailProduct: GetDetailProduct,
};
