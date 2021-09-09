import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title cannot be more than 40 charachters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 40 charachters"],
  },
});

let Note;
try {
  Note = mongoose.model("Note", NoteSchema);
} catch {
  Note = mongoose.model("Note");
}

export default Note;
