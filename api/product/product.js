import apollo from "../../lib/apollo.js";

async function GetDetailProduct(id, token = "") {
  var res = await apollo.query(
    `
    query($input: ID!){
      products(where:{id:$input})
      {
        id
        name
        price
        price1
        price2
        discount
        img{
          url
        }
        product_otrs {
          id
          name
          price
        }
        product_image_colors{
          id
          name
          img{
            url
          }
        }
        description
        spesifikasi_mesin
        spesifikasi_dimensi
        spesifikasi_rangka
        spesifikasi_kelistrikan
        film
        stock
      }
    }	`,
    token, {
      "input": id
    }
  );
  return res;
}

async function GetProductImgColor(id, token = "") {
  var res = await apollo.query(
    `
      query($input: ID!) {
        productImageColors(where:{id:$input}) {
          id
          name
          img{
            url
          }
        }
      }
    `,
    token, {
      "input": id
    }
  );
  return res;
}

async function GetProduct(filter, token = "") {
  var res = await apollo.query(
    `
    query {
      products(where: { ${(filter!="")?`name: "${filter}"`:""} }){ 
        id
        name
        price
        price1
        price2
        discount
        img {
          url
        }
      }
    }`,
    token
  );
  return res;
}

module.exports = {

  GetProductImgColor: GetProductImgColor,
  GetProduct: GetProduct,

  //detail
  GetDetailProduct: GetDetailProduct,
};
