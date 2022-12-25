import { QuickDB } from "quick.db";
const dbUnit = new QuickDB();
export class db {
    public bots = new bots()
    public users = new users()
}
class bots {
    private table = dbUnit.table(`bots_${new Date().getFullYear()}`);
    public commands = new increaseDecreaseHelper("commands", this.table);
    public interactions = new increaseDecreaseHelper("interactions", this.table);
    public messages = new increaseDecreaseHelper("messages", this.table);
    public guilds = new increaseDecreaseHelper("guilds", this.table);
    public channels = new increaseDecreaseHelper("channels", this.table);
}
class users {
    private table = dbUnit.table(`users_${new Date().getFullYear()}`);
    public commands = new increaseDecreaseHelper("commands", this.table);
    public interactions = new increaseDecreaseHelper("interactions", this.table);
    public botUses = new mostUsedBotsHelper(this.table);
}
// Helper to make my life easier
class increaseDecreaseHelper {
    private category: string;
    private table: any
    constructor(category: string, table: any) {
        this.category = category;
        this.table = table;
    }
    public async increase(ID: string) {
        this.table.add(`_${ID}.${this.category}`, 1);
        return;
    }
    public async getVal(ID: string) {
        const val = this.table.get(`_${ID}.${this.category}`, 1);
        return val;
    }
}
class mostUsedBotsHelper {
    private table: any
    constructor(table: any) {
        this.table = table;
    }
    public async increase(ID: string, botName: string) {
        this.table.add(`_${ID}.bots.${botName}`, 1);
        return;
    }
    public async getVal(ID: string, botName: string) {
        const val = this.table.get(`_${ID}.${botName}`, 1);
        return val;
    }
}