import mongoose from "mongoose";

const trackSchema = mongoose.Schema(
  {
    songName: {
      type: String,
      required: true,
    },

    songArtists: {
      type: [String],
      required: true,
    },

    songUrl: {
      type: String,
      required: true,
    },

    songCover: {
      type: String,
      required: true,
    },

    songLyrics: {
      type: String,
      required: true,
    },

    songLen: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Track = mongoose.model("Track", trackSchema);

export default Track;
