import express from "express";
import db  from "../db.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.post("/",auth,(req,res)=>{
  const {name,description,start_date,end_date}=req.body;
  db.query(
    "INSERT INTO trips(user_id,name,description,start_date,end_date) VALUES(?,?,?,?,?)",
    [req.user.id,name,description,start_date,end_date]
  );
  res.json("trip created");
});

router.get("/",auth,(req,res)=>{
  db.query("SELECT * FROM trips WHERE user_id=?",[req.user.id],(err,data)=>{
    res.json(data);
  });
});

router.get("/:id",auth,(req,res)=>{
  db.query("SELECT * FROM trips WHERE id=?",[req.params.id],(err,data)=>{
    res.json(data[0]);
  });
});

export default router;
