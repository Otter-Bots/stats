import db from '@/lib/db'
export default async function handler(req: any, res: any) {
    const table = db.table("stats")
    const token = req.query.token
    const stringToken = Buffer.from(token, "base64").toString("ascii").split("_")
    const newValue = await table.add(`_${stringToken[1]}.${req.query.field}`, 1)
    res.status(200).json({
        status: "success",
        value: newValue
    })
}