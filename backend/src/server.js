import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { devRequestLogger } from "./utils/logging.js";
import sequelize from "./models/dbObjectModels.js";

// routes
import reservationRoutes from "./routes/reservationRoutes.js";
import utilityRoutes from "./routes/utilityRoutes.js";

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express application
const app = express();

// Set the port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware

// Middleware to parse JSON request body
app.use(express.json());
// Development-specific logging middleware
if (process.env.NODE_ENV === "development") {
  console.log("Development mode: Detailed logging enabled");
  app.use(devRequestLogger);
}

/**
 * Initializes and starts the server by establishing database connection,
 * synchronizing models, and starting the Express application.
 *
 * @async
 * @function startServer
 * @throws {Error} When database connection or model synchronization fails
 * @returns {Promise<void>} A promise that resolves when the server starts successfully
 */
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");

    // Sync models with database
    await sequelize.sync({ alter: true });
    console.log("Database models synchronized.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
  }
}

// Frontend setup
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Mount Routes
app.use("/reservations", reservationRoutes);
app.use("/utility", utilityRoutes);

startServer();
