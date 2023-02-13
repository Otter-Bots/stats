import db from "@/lib/db";

export default async function handler(req: any, res: any) {    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    await db.delete(`_${userEmail}.${req.query.botName}`)
    res.status(200).json({success: true})
}