import express from "express";
import dotenv from "dotenv";
import { devRequestLogger } from "./utils/logging.js";
import sequelize  from "./models/dbObjectModels.js";
// import { sequelize } from "./config/db.js";

// routes
import reservationRoutes from "./routes/reservationRoutes.js";

// Application entry point

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Development-specific logging
if (process.env.NODE_ENV === "development") {
  // console.log(`Current environment: ${process.env.NODE_ENV}`);
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
 * Middleware to parse JSON request body
 */
app.use(express.json());



/**
 * Basic route: Hello World
 * @route GET /
 * @returns {string} - Returns a greeting message
 */
app.get("/", (req, res) => {
  res.send("Hello World from the Resource Reservation backend!");
});

// Mount the reservations route at /reservations
app.use("/reservations", reservationRoutes);

startServer();
