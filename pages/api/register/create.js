import Register from "api/auth/auth";

export default async function handler(req, resp) {
    var input = req.body;
    var res = await Register.register(input);
    resp.status(200).json(res);
}