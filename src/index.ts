import { SapphireClient } from "@sapphire/framework"
import config from "./config.json"
const Client = new SapphireClient({
    intents: ['GUILDS','GUILD_MEMBERS']
})
Client.login(config.token)