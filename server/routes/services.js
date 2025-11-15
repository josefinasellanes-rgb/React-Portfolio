import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
    getAllServices,
    getServicesById,
    createServices,
    updateServicesById,
    deleteServicesById,
    deleteAllServices
} from "../controllers/services.js";

// Router /services
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", getAllServices);
router.get("/:id", getServicesById);
router.post("/", createServices);
router.put("/:id", updateServicesById);
router.delete("/:id", deleteServicesById);
router.delete("/", deleteAllServices);

export default router;