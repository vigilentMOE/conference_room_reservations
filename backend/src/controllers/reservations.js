import { ConferenceRoom } from "../models/dbObjectModels.js";

/**
 * Controller to get all conference rooms.
 *
 * @async
 * @function getAllConferenceRoomsController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Returns a JSON response with the list of conference rooms or an error message.
 */
export async function getAllConferenceRoomsController(req, res) {
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

export function validateConferenceRoomController(req, res, next) {
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
