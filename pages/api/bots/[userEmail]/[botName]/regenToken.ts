import db from "@/lib/db";

export default async function handler(req: any, res: any) {    // Parse userEmail
/*     const userEmail = req.query.userEmail.replace(".","-");
    const numOfBots = await db.get(`_${userEmail}.${req.query.botName}.botNum`)
    // Form Token
    const token = `${userEmail}_${req.query.botName}_${Date.now()}_${numOfBots}`;
    const base64Token = Buffer.from(token).toString("base64");
    await db.set(`_${userEmail}.bots.${req.query.botName}.token`, base64Token)
    res.status(200).json({
        token: base64Token,
    }) */
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

        const token = `${user.email}_${req.query.botName}_${Date.now()}`;
        const base64Token = Buffer.from(token).toString("base64");

        await db.user.update({
            where: {
                email: userEmail
            },
            data: {
                bots: {
                    update: {
                        where: {
                            name: req.query.botName
                        },
                        data: {
                            token: base64Token
                        }
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