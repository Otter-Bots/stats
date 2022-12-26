import { APIEvent } from "solid-start";
import { db } from "~/db.jsx"

export async function GET({params}: APIEvent) {
    try {
        const botID: string = params.botID;
        const userID: string = params.userID;
        const category: any = params.category;
        const val = await new db().bots[category as keyof typeof db.prototype.bots].getVal(botID);
        console.log(val)
        return new Response(JSON.stringify({
            status: 200,
            value: val,
            botData: {
                botID: botID,
                userID: userID
            },
        }))
    } catch {
        return new Response(JSON.stringify({
            status: 500,
            message: "error :("
        }))
    }
}