import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import tripRoutes from "./routes/trips.js";
import itineraryRoutes from "./routes/itinerary.js";
import communityRoutes from "./routes/community.js";
import adminRoutes from "./routes/admin.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth",authRoutes);
app.use("/trips",tripRoutes);
app.use("/itinerary",itineraryRoutes);
app.use("/community",communityRoutes);
app.use("/admin",adminRoutes);

app.listen(5000,()=>console.log("Server running on 5000"));


