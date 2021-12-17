import apollo from "../../lib/apollo.js";

async function profile(token="") {
	var res = await apollo.query(
		`
    query{
        users(where: { id: "13" }){
            id
            username
            email
            firstName
            lastName
            telp
            address
        }
    }    
    `,
		token
	);
	return res;
}

async function GetDetailProfile(id, token = "") {
    var res = await apollo.query(
        `
        query($input: ID!){
            users(where:{id:$input})
            {
                id
                username
                email
                firstName
                lastName
                telp
                address
            }
        }	`,
        token, {
            "input": id
        }
    );
    return res;
}

module.exports = {
    profile:profile,
    GetDetailProfile: GetDetailProfile,
};