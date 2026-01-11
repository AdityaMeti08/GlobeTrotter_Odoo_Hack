import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

const db = mysql.createConnection({
  host: "127.0.0.1",        // 🔴 DO NOT use localhost
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ MySQL connected");
});

export default db;
