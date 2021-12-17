import apollo from "../../lib/apollo.js";

async function getID(partner, token = "") {
    var res = await apollo.query(
        `
        query($input : String!){
          businessPartners(where:{name_contains:$input}){
            id
          }
        }`,
        token,
        {
            input: partner,
        }
    );
    return res;
}

module.exports = {
    getID: getID,
};
