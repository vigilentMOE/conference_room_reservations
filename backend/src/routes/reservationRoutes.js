import express from "express";
const router = express.Router();
import {
  createConferenceRoom,
  getAllConferenceRooms,
} from "../services/reservations.js";
import { validateConferenceRoom } from "../controllers/reservations.js";

// Route to get all conference rooms
router.get("/rooms", getAllConferenceRooms);

router.post("/rooms", validateConferenceRoom, async (req, res) => {
  try {
    const newRoom = await createConferenceRoom(req.body);
    return res.status(201).json({
      success: true,
      data: newRoom,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error creating ConferenceRoom",
    });
  }
});

export default router;