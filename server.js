import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";
import trackRoutes from "./backend/routes/trackRoutes.js";
import playlistRoutes from "./backend/routes/playlistRoutes.js";
import artistRoutes from "./backend/routes/artistRoutes.js";

// connect db
connectDB();

// dotenv config
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// creating API for user
app.use("/api/users", userRoutes);
app.use("/api/tracks", trackRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/artists", artistRoutes);

const PORT = process.env.PORT || 5000;

// Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(
    `App is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
