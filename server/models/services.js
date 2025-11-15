import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    title: String,
    image: String
});

export default mongoose.model("Services", servicesSchema);