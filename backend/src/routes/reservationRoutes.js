import express from "express";
import { createConferenceRoomService } from "../services/reservations.js";
import {
  getAllConferenceRoomsController,
  validateConferenceRoomController,
} from "../controllers/reservations.js";

const router = express.Router();

// Route to get all conference rooms
router.get("/rooms", getAllConferenceRoomsController);

// Route to post a new conference
router.post("/rooms", validateConferenceRoomController, async (req, res) => {
  try {
    const newRoom = await createConferenceRoomService(req.body);
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
