import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    faculty: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const quiz = mongoose.model("quiz", schema);
export default quiz;