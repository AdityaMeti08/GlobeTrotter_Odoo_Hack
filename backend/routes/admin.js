import express from "express";
import auth from "../middleware/auth.js";
import db from "../config/db.js";

const router = express.Router();

/* Admin stats */
router.get("/stats", auth, (req, res) => {
  if (!req.user || req.user.role !== "admin") {
    return res.sendStatus(403);
  }

  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM users) AS users,
      (SELECT COUNT(*) FROM trips) AS trips,
      (SELECT COUNT(*) FROM posts) AS posts
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.json(results[0]);
  });
});

export default router;
