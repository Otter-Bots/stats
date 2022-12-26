import { APIEvent } from "solid-start";
import { db } from "~/db.jsx";

export async function GET({params}: APIEvent) {
    try {
    const botID: string = params.botID;
    const userID: string = params.userID;
    const category: any = params.category;
    await new db().bots[category as keyof typeof db.prototype.bots].increase(botID);
    if (category == "commands" || category == "interactions" || category == "messages") {
    await new db().users[category as keyof typeof db.prototype.users].increase(userID, botID);
    }
    await new db().users.botUses.increase(userID, botID);
    return new Response(JSON.stringify({
        status: 200,
        message: "increased :)",
        botData: {
            botID: botID,
            userID: userID
        },
        /* @ts-ignore */
        newValue: (await new db().bots[category as keyof typeof db['user']].getVal(botID)+1)
    }))
    } catch {
        return new Response(JSON.stringify({
            status: 500,
            message: "error :("
        }))
    }
}