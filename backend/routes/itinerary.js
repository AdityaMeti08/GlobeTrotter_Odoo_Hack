import express from "express";
import db  from "../db.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.post("/stop",auth,(req,res)=>{
  const {trip_id,city,country,start_date,end_date,position}=req.body;
  db.query(
    "INSERT INTO trip_stops(trip_id,city,country,start_date,end_date,position) VALUES(?,?,?,?,?,?)",
    [trip_id,city,country,start_date,end_date,position]
  );
  res.json("stop added");
});

router.post("/activity",auth,(req,res)=>{
  const {trip_stop_id,day_number,activity_name,cost,time,notes}=req.body;
  db.query(
    "INSERT INTO activities(trip_stop_id,day_number,activity_name,cost,time,notes) VALUES(?,?,?,?,?,?)",
    [trip_stop_id,day_number,activity_name,cost,time,notes]
  );
  res.json("activity added");
});

router.get("/:trip_id",auth,(req,res)=>{
  db.query(
    `SELECT ts.*,a.* FROM trip_stops ts 
     LEFT JOIN activities a ON ts.id=a.trip_stop_id 
     WHERE ts.trip_id=?`,
     [req.params.trip_id],
     (err,data)=> res.json(data)
  );
});

export default router;
