import "dotenv/config";
import { connectDB } from "./src/config/database";
import app from "./src/app";

const PORT = process.env.PORT || 3000;
// Connect to the database
connectDB().then(function () {
    app.listen(PORT, () => {
        console.log("Server is running on PORT", PORT);
    });
})
    .catch((error) => {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with an error code
    });