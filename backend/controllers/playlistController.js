import Playlist from "../models/playlistModel.js";
import asyncHandler from "express-async-handler";

export const getPlaylists = asyncHandler(async (req, res) => {
  const playlists = await Playlist.find({});
  res.json(playlists);
});

export const getPlaylistById = asyncHandler(async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);

  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404).json({ message: "Playlist not found" });
    res.status(404);
    throw new Error("Playlist not found");
  }
});
