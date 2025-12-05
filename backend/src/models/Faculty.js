import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    facultyId: {
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

const faculty = mongoose.model("faculty", schema);
export default faculty;