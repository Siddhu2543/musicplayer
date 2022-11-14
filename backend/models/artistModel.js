import mongoose from "mongoose";

const artistSchema = mongoose.Schema(
  {
    name: {
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

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
