import { QuickDB, MySQLDriver } from "quick.db";
// Setup DB
var db: QuickDB;
if (process.env.NODE_ENV === "production") {
    var mysql;
    (async () => {
        mysql = new MySQLDriver({
            host: String(process.env.DB_HOST),
            user: String(process.env.DB_USER),
            password: String(process.env.DB_PASS),
            database: String(process.env.DB_NAME),
        });
        await mysql.connect();
        console.log("Connected to MySQL");
    })();
    db = new QuickDB({
        driver: mysql,
    })
} else if (process.env.NODE_ENV === "development") {
    db = new QuickDB();
} else {
    throw new Error("Invalid NODE_ENV");
}
export default db;
// Interfaces
