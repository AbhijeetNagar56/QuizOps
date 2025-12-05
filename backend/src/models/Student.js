import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const student = mongoose.model("student", schema);
export default student;