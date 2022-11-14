import Track from "../models/trackModel.js";
import asyncHandler from "express-async-handler";

export const getTracks = asyncHandler(async (req, res) => {
  const tracks = await Track.find({});
  res.json(tracks);
});

export const getTracksLimited = asyncHandler(async (req, res) => {
  const tracks = await Track.find({}).limit(10);
  res.json(tracks);
});

export const getTrackById = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (track) {
    res.json(track);
  } else {
    res.status(404).json({ message: "Song not found" });
    res.status(404);
    throw new Error("Song not found");
  }
});
