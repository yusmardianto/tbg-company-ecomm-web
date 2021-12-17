import auth from "../../../api/auth/auth";
import Cookies from "cookies";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const cookies = new Cookies(req, res);
        const partner = req.body.p;
        var user = await cookies.get("user");
        var token = await cookies.get("myToken");
        var userObj = user ? JSON.parse(user) : null;
        let sessionId = userObj["partners_login_states"].filter(
            (i) =>
                i.business_partner &&
                i.business_partner.name.toUpperCase() == partner.toUpperCase()
        );
        sessionId.forEach(async (i) => {
            var resp = await auth.logout(i.id, token);
            if (resp["STATUS"] == 0) {
                return res.status(400).send(resp["DATA"]);
            }
        });
        userObj["partners_login_states"] = userObj[
            "partners_login_states"
        ].filter(
            (i) =>
                i.business_partner &&
                i.business_partner.name.toUpperCase() != partner.toUpperCase()
        );
        await cookies.set("user", JSON.stringify(userObj), {
            httpOnly: true, // true by default
        });
        return res.status(200).send("Success Logout");
    } else {
        return res.status(400).send("NOT FOUND");
    }
}
