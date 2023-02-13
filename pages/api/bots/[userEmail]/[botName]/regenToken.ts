import db from "@/lib/db";

export default async function handler(req: any, res: any) {    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    const numOfBots = await db.get(`_${userEmail}.${req.query.botName}.botNum`)
    // Form Token
    const token = `${userEmail}-${req.query.botName}-${Date.now()}-${numOfBots}`;
    const base64Token = Buffer.from(token).toString("base64");
    await db.set(`_${userEmail}.${req.query.botName}.token`, base64Token)
    res.status(200).json({
        token: base64Token,
    })
}