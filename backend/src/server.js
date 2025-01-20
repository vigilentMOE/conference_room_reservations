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

/**
 * Serve static files from the frontend's build directory.
 * When express.static() middleware is used:
 * 1. Any request to the root path '/' automatically looks for an index.html in the specified directory
 * 2. The frontend build process creates dist/index.html which imports main.jsx
 * 3. Express serves this index.html when clients hit the root route '/'
 * 4. Once index.html loads in the browser, it loads the bundled JavaScript (main.jsx)
 * 5. All other static assets (JS, CSS, images) are also served from this directory
 */
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Mount Routes for API
app.use("/reservations", reservationRoutes);
app.use("/utility", utilityRoutes);

startServer();
