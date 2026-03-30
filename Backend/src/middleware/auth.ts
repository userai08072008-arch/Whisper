import type { Request, Response, NextFunction } from 'express';
import { getAuth } from '@clerk/express';
import { UserModel } from "../models/User";
import { requireAuth } from '@clerk/express';

export type AuthRequest = Request & { userId?: string };
export const protectRoute = [
    requireAuth(), // This middleware checks if the user is authenticated using Clerk
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const { userId: clerkId } = getAuth(req);
            if (!clerkId) return res.status(401).json({ message: "Unauthorized" });

            const user = await UserModel.findOne({ clerkId });
            if (!user) return res.status(404).json({ message: "User not found" });

            req.userId = user._id.toString(); // Attach our internal user ID to the request object
            next();
        } catch (error) {
            console.error("Error in protectRoute middleware:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
];