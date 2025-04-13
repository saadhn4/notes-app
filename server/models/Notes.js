import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const notesModel = mongoose.model("movies", noteSchema, "movies");

export default notesModel;
