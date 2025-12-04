import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "MongoDB connection error: "));
connection.once("open", () => { console.log("Connected to MongoDB"); });

import projectRoutes from "./routes/project.js";
import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import educationRoutes from "./routes/education.js";
import servicesRoutes from "./routes/services.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to My Portfolio application." });
});


app.use(express.static(path.join(__dirname, '../client/dist')));
app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.listen(3000);

console.log("Server running at http://localhost:3000/");