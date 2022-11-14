import mongoose from "mongoose";

const playlistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tracks: {
      type: [String],
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    coverUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;
