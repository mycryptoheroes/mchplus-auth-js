"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    sand: {
        clientId: "pls-sand",
        lang: "ja",
        authUri: "https://www.origin.sand.mchdfgh.xyz/pls-auth-api",
        verifyNumberUri: "https://www.origin.sand.mchdfgh.xyz/pls-auth-api",
        loginQrcode: "https://www.origin.sand.mchdfgh.xyz/pls-auth-api"
    },
    prod: {
        clientId: "pls-prod",
        lang: "ja",
        authUri: "https://www.mycryptoheroes.net/pls-auth-api",
        verifyNumberUri: "https://www.mycryptoheroes.net/pls-auth-api",
        loginQrcode: "https://www.mycryptoheroes.net/pls-auth-api"
    }
};
exports.default = env;
