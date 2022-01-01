"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@sapphire/framework");
const config_json_1 = __importDefault(require("./config.json"));
const Client = new framework_1.SapphireClient({
    intents: ['GUILDS', 'GUILD_MEMBERS']
});
Client.login(config_json_1.default.token);
//# sourceMappingURL=index.js.map