import db from "@/lib/db";

export default async function handler(req: any, res: any) {    // Parse userEmail
    const userEmail = req.query.userEmail.replace(".","-");
    const user = await db.user.upsert({
        where: {
            email: userEmail
        },
        create: {
            email: userEmail,
        },
        update: {},
    })

    console.log(await db.bot.delete({
        where: {
            name: req.query.botName,
        },
        select: {
            user: true,
            name: true
        }
    }))
    res.status(200).json({
        success: true
    })
}