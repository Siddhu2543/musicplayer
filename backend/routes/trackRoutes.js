import {
  getTracks,
  getTrackById,
  getTracksLimited,
} from "../controllers/trackController.js";
import express from "express";

const router = express.Router();

router.route("/all").get(getTracks);

router.route("/").get(getTracksLimited);

router.route("/:id").get(getTrackById);

export default router;
