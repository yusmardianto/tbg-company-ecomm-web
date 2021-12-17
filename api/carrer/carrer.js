import apollo from "../../lib/apollo.js";

async function GetCarrerS1Yamaha(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "S1" business_partner: "1"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerD3Yamaha(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "D3" business_partner: "1"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerSMAYamaha(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "SMA" business_partner: "1"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetDetailCarrer(id, token="") {
	var res = await apollo.query(
		`
        query($input: ID!){
            carrers(where:{id:$input})
            {
                name
                description
                category
                img{
                    url
                }
                start_regis
                until_regis
                name_description
            }
        }		
        `,
        token, 
        {	
            "input": id
        }
    );
	return res;
}

async function GetCarrerS1Suzuki(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "S1" business_partner:"2"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerD3Suzuki(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "D3" business_partner:"2"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerSMASuzuki(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "SMA" business_partner:"2"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerS1Honda(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "S1" business_partner:"3"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerD3Honda(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "D3" business_partner:"3"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerSMAHonda(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "SMA" business_partner:"3"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerS1Hino(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "S1" business_partner:"4"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerD3Hino(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "D3" business_partner:"4"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

async function GetCarrerSMAHino(token="") {
	var res = await apollo.query(
		`
        query {
            carrers(where: {category: "SMA" business_partner:"4"})
                {
                    id
                    name
                    start_regis
                    until_regis
                    name_description
                }
            }`,
		token
	);
	return res;
}

module.exports = {
    //yamaha
    GetCarrerS1Yamaha:GetCarrerS1Yamaha,
    GetCarrerD3Yamaha:GetCarrerD3Yamaha,
    GetCarrerSMAYamaha:GetCarrerSMAYamaha,

    //suzuki
    GetCarrerS1Suzuki:GetCarrerS1Suzuki,
    GetCarrerD3Suzuki:GetCarrerD3Suzuki,
    GetCarrerSMASuzuki:GetCarrerSMASuzuki,

    //honda
    GetCarrerS1Honda:GetCarrerS1Honda,
    GetCarrerD3Honda:GetCarrerD3Honda,
    GetCarrerSMAHonda:GetCarrerSMAHonda,

    //hino
    GetCarrerS1Hino:GetCarrerS1Hino,
    GetCarrerD3Hino:GetCarrerD3Hino,
    GetCarrerSMAHino:GetCarrerSMAHino,

    GetDetailCarrer:GetDetailCarrer,
};