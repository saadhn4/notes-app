import express from "express";
import config from "config";
import notesRouter from "./controllers/notes.js";
import "./utils/dbConnect.js";
import cors from "cors";

const app = express();
app.use(express.json());
const PORT = config.get("PORT");

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
); // Apne frontend ka port dalna

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello world!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
