import db from "@/lib/db";

export default async function handler(req: any, res: any) {    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    await db.delete(`_${userEmail}.bots.${req.query.botName}`)
    await db.pull(`_${userEmail}.botNames`, req.query.botName)
    res.status(200).json({success: true})
}