import express from "express";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //parse the incoming request body as JSON and makes it available under req.body in the route handlers. This is essential for handling POST, PUT, and PATCH requests 
// where the client sends data in the request body.

app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
}); 
// title, img => req.body.title and etc
app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
export default app;
