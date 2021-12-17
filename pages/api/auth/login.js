import auth from "api/auth/auth";
import Cookies from "cookies";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const cookies = new Cookies(req, res);
        var email = req.body.email;
        var pass = req.body.pass;
        var partner = req.body.partner;
        var resp = await auth.login(partner, email, pass);
        var login = resp["res"];
        // console.log(login["DATA"]);
        if (login["STATUS"] == 0) {
            return res
                .status(400)
                .send(login["DATA"] + ". Check user and password again.");
        }
        var userObj = resp["cookies"]["user"];
        await cookies.set("myToken", resp["cookies"]["token"], {
            httpOnly: true, // true by default
        });
        await cookies.set("user", JSON.stringify(userObj), {
            httpOnly: true, // true by default
        });
        let sessionId = userObj["partners_login_states"].filter(
            (i) =>
                i.business_partner &&
                i.business_partner.name.toUpperCase() == partner.toUpperCase()
        );
        if (sessionId.length == 0) return res.status(400).send("Login Failed");
        return res.status(200).send("Success Login");
        // res.status(200).json(login);
        // res.writeHead(200, {
        //     Location: "../home",
        //     //add other headers here...
        // });
        // res.end();
    } else {
        return res.status(400).send("NOT FOUND");
    }
}
