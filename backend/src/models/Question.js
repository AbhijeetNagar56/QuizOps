import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    quizId: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    }
  },
  { timestamps: true }
);

const question = mongoose.model("question", schema);
export default question;