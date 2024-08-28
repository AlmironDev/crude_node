import mongoose from "mongoose";

const taksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: { type: String, trim: true },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    // versionKey: false, // Esto desactiva la creación del campo __v
  }
);

export default mongoose.model("Taks", taksSchema);
