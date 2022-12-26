import { APIEvent } from "solid-start";
import { db } from "~/db.jsx"

export async function GET({params}: APIEvent) {
    try {
        const userID: string = params.userID;
        const botID: string = params.botID;
        const category: any = params.category;
        const val = await new db().users[category as keyof typeof db.prototype.users].getVal(userID, botID);
        console.log(val)
        return new Response(JSON.stringify({
            status: 200,
            value: val,
            botData: {
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