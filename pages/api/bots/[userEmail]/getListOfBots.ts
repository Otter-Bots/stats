import db from "@/lib/db"

export default async function handler(req: any, res: any) {
    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    //const botNames = await db.get(`_${userEmail}.botNames`)
    const botNames = await db.bot.findMany({
        where: {
            user: {
                email: userEmail
            }
        },
        select: {
            name: true
        }
    })
    res.status(200).json({data: botNames})
}