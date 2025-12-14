import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    answers: {
      type: [String],
      required: true,
    }
  },
  { timestamps: true }
);

const submission = mongoose.model("submission", schema);
export default submission;