import apollo from "../../lib/apollo.js";
import partners from "../partner/partner";

async function register(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input : RegisterInput!){
        register( input:{data:$input} )
        {
          user{
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

async function login(partner, email, password, token = "") {
  var cookiesData = {};
  var res = await apollo.mutation(
    `
        mutation($email: String! $password: String!) {
          login(input: { identifier: $email, password: $password }) {
            user{
              id
              username
            }
            jwt
          }
        }`,
    token,
    {
      email: email,
      password: password,
    }
  );

  if (res["STATUS"] == 1) {
    token = res["DATA"]["login"]["jwt"];
    res = await apollo.mutation(
      `
            query{
              self{
                id
                username
                email
                role{
                  name
                  description
                }
                partners_login_states{
                  id
                  business_partner{
                    id
                    name
                  }
                }
              }
            }
            `,
      token
    );
  }

  if (res["STATUS"] == 1) {
    var user = res["DATA"]["self"];
    var sessions = [];
    for (const i of user["partners_login_states"]) {
      sessions.push(i.business_partner);
    }
    sessions = sessions.filter(
      (i) =>
        i.business_partner &&
        i.business_partner.name.toUpperCase() == partner.toUpperCase()
    );
    if (sessions.length == 0) {
      res = await partners.getID(partner, token);
      if (res["STATUS"] == 1) {
        res = await apollo.mutation(
          `
                    mutation($input: PartnersLoginStateInput!) {
                        createPartnersLoginState(input:{data:$input}){
                            partnersLoginState{
                              id
                              business_partner{
                                id
                                name
                              }
                            }
                        }
                    }
                    `,
          token,
          {
            input: {
              user: user["id"],
              business_partner:
                res["DATA"]["businessPartners"][0]["id"],
            },
          }
        );
        if (res["STATUS"] == 1) {
          user["partners_login_states"].push(
            res["DATA"]["createPartnersLoginState"][
            "partnersLoginState"
            ]
          );
        }
      }
    }
    cookiesData["user"] = user;
    cookiesData["token"] = token;
  }
  return { res: res, cookies: cookiesData };
}

async function logout(id, token = "") {
  var res = await apollo.mutation(
    `
        mutation($input: ID!) {
            deletePartnersLoginState(input:{where:{id:$input}}){
                partnersLoginState{
                  id
                }
            }
        }`,
    token,
    {
      input: id,
    }
  );
  return res;
}

module.exports = {
  register: register,
  login: login,
  logout: logout,
};
