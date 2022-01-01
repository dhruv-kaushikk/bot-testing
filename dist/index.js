"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@sapphire/framework");
const config_json_1 = require("./config.json");
const client = new framework_1.SapphireClient({
    defaultPrefix: 't!',
    caseInsensitiveCommands: true,
    logger: {
        level: 20 /* Debug */
    },
    shards: 'auto',
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS'
    ]
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.logger.info('Logging in');
        yield client.login(config_json_1.token);
        client.logger.info('logged in');
    }
    catch (error) {
        client.logger.fatal(error);
        client.destroy();
        process.exit(1);
    }
});
main();
//# sourceMappingURL=index.js.map