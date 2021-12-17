import apollo from "../../lib/apollo.js";

async function GetCourier(filter, token="") {
	var res = await apollo.query(
        `
        query {
            couriers{
                id
                name
                duration
                price
                description
                }
            }
        `,
            token
	);
	return res;
}

module.exports = {
	GetCourier: GetCourier,
};