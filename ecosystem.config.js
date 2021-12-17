const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

module.exports = {
  apps: [
    {
      name: "tbg-company-ecomm",
      script: "server.js",
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: process.env,
    },
  ],
};
