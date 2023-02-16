import db from "@/lib/db"

export default async function handler(req: any, res: any) {
    try {
        const userEmail = req.query.userEmail.replace("@","-");
        const user = await db.user.upsert({
            where: {
                email: userEmail
            },
            create: {
                email: userEmail,
            },
            update: {},
        })

        const token = `${user?.email}_${req.query.botName}_${Date.now()}`;
        const base64Token = Buffer.from(token).toString("base64");

        await db.user.update({
            where: {
                email: userEmail
            },
            data: {
                bots: {
                    create: {
                        name: req.query.botName,
                        token: base64Token,
                        avatar: req.query.avatar
                    }
                }
            }
        })
        res.status(200).json({
            token: base64Token,
        })
    } catch (error: any) {
        res.status(200).json({
            error: error.message
        })
    }
}