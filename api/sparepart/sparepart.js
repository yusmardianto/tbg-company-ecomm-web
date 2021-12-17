import apollo from "../../lib/apollo.js";

async function GetSparepartYGP(filter, token="") {
	var res = await apollo.query(
		`
			query{
				ygParts(where: { ${(filter!="")?`name: "${filter}"`:""} }){
					id
					name
					img{
						url
					}
					price1
					price2
                    discount
					ygp_units{
						name
						part_code
						price
					}
				}
			}
    `,
		token
	);
	return res;
}

async function GetSparepartYamalube(filter, token="") {
	var res = await apollo.query(
		`
        query {
                yamalubes(where: { ${(filter!="")?`name: "${filter}"`:""} }) {
                    id
                    name
                    part_code
                    price
                    description
                    stock
                    discount
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

async function GetHelmet(filter, token="") {
	var res = await apollo.query(
		`
        query {
            helmets(where: { ${(filter!="")?`name: "${filter}"`:""} }){
                id
                name
                price
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

async function GetApparel(filter, token="") {
	var res = await apollo.query(
		`
        query {
            apparels(where: { ${(filter!="")?`name: "${filter}"`:""} }){
                id
                name
                price
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

async function GetAcc(filter, token="") {
	var res = await apollo.query(
		`
        query {
            accessories(where: { ${(filter!="")?`name: "${filter}"`:""} }){
                id
                name
                price
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

async function GetYGPDetail(id, token="") {
	var res = await apollo.query(
		`
        query($input: ID!){
            ygParts(where:{id:$input})
            {
							id
							name
							img{
								url
							}
                            discount
							description
							price1
							price2
							ygp_units{
								name
								part_code
								price
								description
							}
            }
        }	`,
            token,
        {
        "input": id
        }
	);
	return res;
}

async function GetYamalubeDetail(id, token="") {
    var res = await apollo.query(
        `
        query($input: ID!){
            yamalubes(where:{id:$input})
            {
                id
                name
                description
                price
                part_code
                discount
                img {
                    url
                }
                stock
            }
        }   `,
            token,
        {
        "input": id
        }
    );
    return res;
}

async function GetHelmetDetail(id, token="") {
    var res = await apollo.query(
        `
        query($input: ID!){
            helmets(where:{id:$input})
            {
                id
                name
                description
                price
                part_code
                discount
                img {
                    url
                }
                stock
            }
        }   `,
            token,
        {
        "input": id
        }
    );
    return res;
}

async function GetApparelDetail(id, token="") {
    var res = await apollo.query(
        `
        query($input: ID!){
            apparels(where:{id:$input})
            {
                id
                name
                description
                price
                part_code
                discount
                img {
                    url
                }
                stock
            }
        }   `,
            token,
        {
        "input": id
        }
    );
    return res;
}

async function GetAccDetail(id, token="") {
    var res = await apollo.query(
        `
        query($input: ID!){
            accessories(where:{id:$input})
            {
                id
                name
                description
                price
                part_code
                discount
                img {
                    url
                }
                stock
            }
        }   `,
            token,
        {
        "input": id
        }
    );
    return res;
}

module.exports = {

    //collection type YGP
    GetSparepartYGP: GetSparepartYGP,
    GetSparepartYamalube: GetSparepartYamalube,
    GetHelmet: GetHelmet,
    GetApparel: GetApparel,
		GetAcc: GetAcc,

    //Detail
    GetYGPDetail: GetYGPDetail,
    GetYamalubeDetail: GetYamalubeDetail,
    GetHelmetDetail: GetHelmetDetail,
    GetApparelDetail: GetApparelDetail,
    GetAccDetail: GetAccDetail,
};
