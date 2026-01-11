router.get("/search",(req,res)=>{
  const q=`%${req.query.q}%`;
  db.query(
    "SELECT * FROM activities WHERE activity_name LIKE ?",
    [q],
    (err,data)=>res.json(data)
  );
});
