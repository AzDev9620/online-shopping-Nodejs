const dotEnv  = require("dotenv").config();

if (process.env.NODE_ENV !== 'prod') {
    const configFile =  `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path:  configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: 8000,
    DB_URL: "mongodb://localhost:27017/test",
    APP_SECRET: "SECRET__KEY"
}
 