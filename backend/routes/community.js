import express from "express";
import auth from "../middleware/auth.js";
import db from "../config/db.js";

const router = express.Router();

/* Create a post */
router.post("/", auth, (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  db.query(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    [req.user.id, title, content],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.status(201).json({ message: "Post created", postId: result.insertId });
    }
  );
});

/* Get all posts */
router.get("/", (req, res) => {
  db.query(
    `
    SELECT 
      p.*, 
      u.first_name 
    FROM posts p 
    JOIN users u ON p.user_id = u.id
    ORDER BY p.created_at DESC
    `,
    (err, data) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.json(data);
    }
  );
});

export default router;
