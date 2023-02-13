import db from "@/lib/db"

export default async function handler(req: any, res: any) {
    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    // Calculate numOfBots
    const numOfBots = await db.add("numOfBots", 1)
    // Form Token
    const token = `${userEmail}-${req.query.botName}-${Date.now()}-${numOfBots}`;
    const base64Token = Buffer.from(token).toString("base64");
    db.set(`_${userEmail}.${req.query.botName}`, {
        token: base64Token,
        botNum: numOfBots,
        avatar: req.query.avatar
    })
    res.status(200).json({
        token: base64Token,
        avatar: req.query.avatar
    })
}