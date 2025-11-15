import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    deleteAllUsers,
} from "../controllers/user.js";

// Router /users
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.delete("/", deleteAllUsers);

export default router;