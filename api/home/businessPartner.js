import apollo from "../../lib/apollo.js";

async function GetbusinessPartners(token = "") {
	var res = await apollo.query(
		`
		query{
			businessPartners
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
	GetbusinessPartners: GetbusinessPartners,
};