import apollo from "../../lib/apollo.js";

async function GetservicesYamaha(token="") {
	var res = await apollo.query(
		`
		query{
			services
			{
			name
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

async function GetservicesSuzuki(token="") {
	var res = await apollo.query(
		`
		query{
			services
			{
			name
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

module.exports = {
	GetservicesYamaha: GetservicesYamaha,
	GetservicesSuzuki:GetservicesSuzuki,
};