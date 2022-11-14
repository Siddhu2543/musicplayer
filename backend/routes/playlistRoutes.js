import {
  getPlaylists,
  getPlaylistById,
} from "../controllers/playlistController.js";
import express from "express";

const router = express.Router();

router.route("/").get(getPlaylists);

router.route("/:id").get(getPlaylistById);

export default router;
