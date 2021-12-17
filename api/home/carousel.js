import apollo from "../../lib/apollo.js";

async function GetCarouselsYamaha(token="") {
	var res = await apollo.query(
		`
		query{
			carousels(where: { business_partner: "1" })
			{
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

async function GetCarouselsSuzuki(token="") {
	var res = await apollo.query(
		`
		query {
			carousels(where: { business_partner: "2" }) {
				id
				img {
					url
				}
			}
		}
				`,
		token
	);
	return res;
}

async function GetCarouselsHonda(token="") {
	var res = await apollo.query(
		`
		query {
			carousels(where: { business_partner: "3" }) {
				id
				img {
					url
				}
			}
		}
				`,
		token
	);
	return res;
}

async function GetCarouselsHino(token="") {
	var res = await apollo.query(
		`
		query {
			carousels(where: { business_partner: "4" }) {
				id
				img {
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
	GetCarouselsYamaha:GetCarouselsYamaha,
	GetCarouselsSuzuki:GetCarouselsSuzuki,
	GetCarouselsHonda:GetCarouselsHonda,
	GetCarouselsHino:GetCarouselsHino,
};