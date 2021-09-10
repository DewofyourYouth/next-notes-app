import mongoose from "mongoose";

const ShasSchema = new mongoose.Schema({
  meseches: {
    type: String,
    required: [true, "Please add a meseches name."],
  },
  amud: {
    type: String,
    required: [true, "Please indicate an amud."],
  },
  title: {
    type: String,
    required: false,
    maxlength: [50, "Title cannot be more than 50 charachters."],
  },
  description: {
    type: String,
    required: true,
    maxlength: [1000, "Description cannot be more than 1000 charachters."],
  },
});

let ShasNote;

try {
  ShasNote = mongoose.model("ShasNote", ShasSchema);
} catch {
  ShasNote = mongoose.mondel("ShasNote");
}

export default ShasNote;
