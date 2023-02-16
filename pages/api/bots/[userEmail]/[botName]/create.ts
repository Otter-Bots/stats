import db from "@/lib/db"

export default async function handler(req: any, res: any) {
    const statsTable = db.table("stats")
    if (!statsTable.has(`_${req.query.botName}`)) {
        // Parse userEmail
        const userEmail = req.query.userEmail.replace(".","-");
        // Calculate numOfBots
        const numOfBots = await db.add("numOfBots", 1)
        // Form Token
        const token = `${userEmail}_${req.query.botName}_${Date.now()}_${numOfBots}`;
        const base64Token = Buffer.from(token).toString("base64");
        await db.set(`_${userEmail}.bots.${req.query.botName}`, {
            token: base64Token,
            botNum: numOfBots,
            avatar: req.query.avatar
        })
        await db.push(`_${userEmail}.botNames`, req.query.botName)
        res.status(200).json({
            token: base64Token,
            avatar: req.query.avatar
        })
    } else {
        res.status(200).json({
            error: "Bot already exists"
        })
    }
}