import Artist from "../models/artistModel.js";
import asyncHandler from "express-async-handler";

export const getArtists = asyncHandler(async (req, res) => {
  const artists = await Artist.find({});
  res.json(artists);
});

export const getArtistById = asyncHandler(async (req, res) => {
  const artist = await Artist.findById(req.params.id);

  if (artist) {
    res.json(artist);
  } else {
    res.status(404).json({ message: "Artist not found" });
    res.status(404);
    throw new Error("Artist not found");
  }
});
