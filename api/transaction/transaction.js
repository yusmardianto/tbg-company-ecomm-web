import apollo from "../../lib/apollo.js";

async function getTransaction(token = "") {
  var res = await apollo.query(
    `
    query {
      transactions{
        id
        order_id
        cust_name
        cust_telp
        cust_address
        product_img{
          url
        }
        product_name
        product_color
        product_quantity
        product_courier
        product_price
      }
    }`,
    token
  );
  return res;
}

async function getTransactionUnpaid(token = "") {
  var res = await apollo.query(
    `
    query {
      transactions(where: { status: "1" }){
        id
        order_id
        cust_name
        cust_telp
        cust_address
        product_img{
          url
        }
        product_name
        product_color
        product_quantity
        product_courier
        product_price
      }
    }`,
    token
  );
  return res;
}

async function PayTransactionUnpaid(token = "") {
  var res = await apollo.query(
    `
      query{
        transactions(where: { status: "1" }){
          id
          order_id
          cust_name
          cust_telp
          cust_address
          product_img{
            url
          }
          product_name
          product_color
          product_quantity
          product_courier
          product_price
          }
      }
      `,
    token
  );
  return res;
}

async function getTransactionPrepared(token = "") {
  var res = await apollo.query(
    `
    query {
      transactions(where: { status: "2" }){
        id
        order_id
        cust_name
        cust_telp
        cust_address
        product_img{
          url
        }
        product_name
        product_color
        product_quantity
        product_courier
        product_price
      }
    }`,
    token
  );
  return res;
}

async function getTransactionSending(token = "") {
  var res = await apollo.query(
    `
    query {
      transactions(where: { status: "3" }){
        id
        order_id
        cust_name
        cust_telp
        cust_address
        product_img{
          url
        }
        product_name
        product_color
        product_quantity
        product_courier
        product_price
      }
    }`,
    token
  );
  return res;
}

async function getTransactionFinished(token = "") {
  var res = await apollo.query(
    `
    query {
      transactions(where: { status: "4" }){
        id
        order_id
        cust_name
        cust_telp
        cust_address
        product_img{
          url
        }
        product_name
        product_color
        product_quantity
        product_courier
        product_price
      }
    }`,
    token
  );
  return res;
}

async function AddToCart(content, token = "") {
  var res = await apollo.mutation(
    `
        mutation($input : CartInput!){
            createCart( input:{data:$input} )
            {
                cart{
                  id
                }
            }
        }
        `,
    token,
    {
      input: content,
    }
  );
  return res;
}

async function AddToCheckout(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input: CheckoutInput!) {
        createCheckout(input: { data: $input }) {
          checkout {
            id
          }
        }
      }
    
    `,
    token,
    {
      input: content,
    }
  );
  return res;
}

async function newTransactionYamaha(content, token = "") {
  var res = await apollo.mutation(
    `
        mutation($input : TransactionInput!){
            createTransaction( input:{data:$input} )
            {
                transaction{
                  id
                }
            }
        }
        `,
    token,
    {
      input: content,
    }
  );
  return res;
}

async function newTransactionSuzuki(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input : TransactionInput!){
          createTransaction( input:{data:$input} )
          {
              transactionSuzuki{
                id
              }
          }
      }
      `,
    token,
    {
      input: content,
    }
  );
  return res;
}

async function newTransactionHonda(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input : TransactionInput!){
          createTransaction( input:{data:$input} )
          {
              transactionHonda{
                id
              }
          }
      }
      `,
    token,
    {
      input: content,
    }
  );
  return res;
}

async function newTransactionHino(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input : TransactionInput!){
          createTransaction( input:{data:$input} )
          {
              transactionHino{
                id
              }
          }
      }
      `,
    token,
    {
      input: content,
    }
  );
  return res;
}

module.exports = {
  newTransactionYamaha: newTransactionYamaha,
  newTransactionSuzuki: newTransactionSuzuki,
  newTransactionHonda: newTransactionHonda,
  newTransactionHino: newTransactionHino,
  getTransaction: getTransaction,
  getTransactionUnpaid: getTransactionUnpaid,
  PayTransactionUnpaid: PayTransactionUnpaid,
  getTransactionPrepared: getTransactionPrepared,
  getTransactionSending: getTransactionSending,
  getTransactionFinished: getTransactionFinished,

  AddToCart: AddToCart,
  AddToCheckout:AddToCheckout,
};