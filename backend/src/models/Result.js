import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    grades: {
      type: String,
      required: true,
    },
    responses: {
      type: [String],
      required: true,
    }
  },
  { timestamps: true }
);

const result = mongoose.model("result", schema);
export default result;