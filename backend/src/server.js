// Application entry point

const express = require("express");
const dotenv = require("dotenv");
const { devRequestLogger } = require('./utils/logging');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/**
 * Middleware to parse JSON request body
 */
app.use(express.json());

// Development-specific logging
if (process.env.NODE_ENV === 'development') {
    console.log('Development mode: Detailed logging enabled');
    app.use(devRequestLogger);
  }

// routes
const reservationRoutes = require('./routes/reservationRoutes');

/**
 * Basic route: Hello World
 * @route GET /
 * @returns {string} - Returns a greeting message
 */
app.get("/", (req, res) => {
  res.send("Hello World from the Resource Reservation backend!");
});

// Mount the reservations route at /reservations
app.use('/reservations', reservationRoutes);

/**
 * Start the server
 * @param {number} PORT - The port on which the server will listen
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

