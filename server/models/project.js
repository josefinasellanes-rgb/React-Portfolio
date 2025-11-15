import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    image: String,
});

export default mongoose.model("Project", projectSchema);