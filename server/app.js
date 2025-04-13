import express from "express";
import config from "config";
import path from "path";
import { fileURLToPath } from "url";
import notesRouter from "./controllers/notes.js";
import "./utils/dbConnect.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.get("PORT") || 5000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

// Backend API routes
app.use("/api/notes", notesRouter);

// Serve static frontend
app.use(express.static(path.join(__dirname, "dist")));

// Wildcard route for React Router (safe version)
app.get(/^\/(?!.*https?:\/\/).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at ${PORT}`);
});