import apollo from "../../lib/apollo.js";

async function GetSalesMerci(token = "") {
    var res = await apollo.query(
        `
        query{
            salesMercies
            {
              id
              name
              telp
              wa
              email
              job_title
              company
              start_on
              end_on
              foto{
                url
              }
            }
          }
    `,
        token
    );
    return res;
}

async function GetDetailSalesMerci(id, token = "") {
  var res = await apollo.query(
      `
      query($input: ID!){
          salesMercies(where:{id:$input})
          {
            id
            name
            telp
            wa
            email
            job_title
            company
            start_on
            end_on
            foto{
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

module.exports = {
    GetSalesMerci: GetSalesMerci,
    GetDetailSalesMerci:GetDetailSalesMerci
};