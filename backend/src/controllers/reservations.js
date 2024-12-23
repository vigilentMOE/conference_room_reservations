import { ConferenceRoom } from "../models/dbObjectModels.js";

/**
 * Get all conference rooms
 * @async
 * @function getAllConferenceRooms
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<void>} Sends JSON response with all conference rooms
 */
export async function getAllConferenceRooms(req, res) {
  try {
    const conferenceRooms = await ConferenceRoom.findAll();
    return res.status(200).json({
      success: true,
      data: conferenceRooms,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error fetching conference rooms",
    });
  }
}

export function validateConferenceRoom(req, res, next) {
  const { name, capacity, location } = req.body;
  if (!name || !capacity || !location) {
    return res.status(400).json({
      success: false,
      message: "Name, capacity, and location are required",
    });
  }
  if (capacity <= 0) {
    return res.status(400).json({
      success: false,
      message: "Capacity must be greater than 0",
    });
  }
  next();
}
