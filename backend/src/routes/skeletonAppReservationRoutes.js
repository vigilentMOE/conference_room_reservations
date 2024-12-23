// const express = require("express");
// const router = express.Router();

// // Temporary in-memory store (e.g., reservations array)
// let reservations = [];

// /**
//  * GET /reservations - List all reservations
//  * @route GET /reservations
//  * @returns {object} - JSON object containing success status and reservations data
//  * @throws {object} - JSON object containing error message if request fails
//  */
// router.get("/", (req, res) => {
//   try {
//     // Attempt to get reservations
//     if (!reservations) {
//       // If reservations is null/undefined
//       return res.status(404).json({
//         success: false,
//         error: "No reservations found",
//       });
//     }

//     res.json({
//       success: true,
//       data: reservations,
//     });
//   } catch (error) {
//     // Handle any errors that occur
//     res.status(500).json({
//       success: false,
//       error: error.message || "Internal server error",
//     });
//   }
// });

// /**
//  * POST /reservations - Create a new reservation
//  * @route POST /reservations
//  * @param {string} resourceId - ID of the resource being reserved
//  * @param {string} userId - ID of the user making the reservation
//  * @param {string} startTime - Start time of the reservation
//  * @param {string} endTime - End time of the reservation
//  * @returns {object} - JSON object containing success status and message or new reservation data
//  */
// router.post("/", (req, res) => {
//   try {
//     const { resourceId, userId, startTime, endTime } = req.body;

//     // Basic validation
//     if (!resourceId || !userId || !startTime || !endTime) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     // Create a new reservation object
//     const newReservation = {
//       id: reservations.length + 1, // simplistic ID generation
//       resourceId,
//       userId,
//       startTime,
//       endTime,
//     };

//     // Push to array
//     reservations.push(newReservation);

//     res.status(201).json({
//       success: true,
//       data: newReservation,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message || "Internal server error",
//     });
//   }
// });

// module.exports = router;
