import apollo from "../../lib/apollo.js";

async function GetDealers(filter, token="") {
	var res = await apollo.query(
        `
            query { ${(filter!="")?`name: "${filter}"`:""}
                dealers
                {
                    id
                    name
                    kota_dealer
                    address
                    telp
                    email
                    location
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

async function GetHomeDealer(token="", start = 0) {
	var res = await apollo.query(
		`
            query($start: Int!) {
                dealers(limit:6,start:$start){
                    id
										name
										kota_dealer
										address
										telp
										email
										location
                    img{
                        url
                    }
                }
            }
		`,
		token,
		{
      start: start,
    }
	);
	return res;
}

module.exports = {
	GetDealers: GetDealers,
    GetHomeDealer: GetHomeDealer,
};
