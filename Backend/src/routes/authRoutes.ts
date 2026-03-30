import { Router } from "express";
import { clerkClient } from "@clerk/express";
import { UserModel } from "../models/User";
import {authCallback, getMe} from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/me", protectRoute, getMe);
router.post("/callback", authCallback);
// Create user endpoint - called when a new user signs up
router.post("/me", async (req, res) => {
    try {
        const { clerkId, email, name, avatar } = req.body;

        // Check if user already exists
        let user = await UserModel.findOne({ clerkId });
        if (user) {
            return res.status(200).json({ user, message: "User already exists" });
        }

        // Create new user
        user = await UserModel.create({
            clerkId,
            email,
            name,
            avatar: avatar || "",
        });

        res.status(201).json({ user, message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
});

// Get current user info
// /api/auth/me
router.get("/me", protectRoute, getMe); {
    try {        const userId =req.userId;
            return res.status(404).json({ message: "User not found" });
        }

        const user = await UserModel.findById(userId˚˚˙);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json( user );
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Error fetching user" });
        //next()
    }
);

export default router;