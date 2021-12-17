const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const cli = require("next/dist/cli/next-start");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// require("dotenv").config();

console.log(process.env.PORT);
const port = process.env.PORT || "14009";

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;
		// if (pathname === "/") {
		// 	app.render(req, res, "/home", query);
		// } else if (pathname === "/yamaha") {
		// 	app.render(req, res, "/yamaha/home", query);
		// } else if (pathname === "/suzuki") {
		// 	app.render(req, res, "/suzuki/home", query);
		// }
		//   app.render(req, res, "/BookingService", query);
		// } else if (pathname === "/statuspengajuan/") {
		//   app.render(req, res, "/StatusPengajuan", query);
		// }
		// else {
		handle(req, res, parsedUrl);
		// }
	}).listen(port, (err) => {
		if (err) throw err;
		console.log(`Ready on port ${port}`);
	});
});

// cli.nextStart(["-p", port]);
