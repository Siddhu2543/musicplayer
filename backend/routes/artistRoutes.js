import { getArtists, getArtistById } from "../controllers/artistController.js";
import express from "express";

const router = express.Router();

router.route("/").get(getArtists);

router.route("/:id").get(getArtistById);

export default router;
