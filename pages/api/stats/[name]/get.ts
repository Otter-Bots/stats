import db from '@/lib/db'
export default async function handler(req: any, res: any) {
    const table = db.table("stats");
    const data = await table.get(`_${req.query.name}`);
    res.status(200).json({
        status: "success",
        data: data
    })
}