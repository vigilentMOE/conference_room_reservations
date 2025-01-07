import { ConferenceRoom } from "../models/dbObjectModels.js";

/**
 * Fetches all ConferenceRooms from the database
 * @async
 * @function fetchAllConferenceRooms
 * @returns {Promise<Array<object>>} List of all ConferenceRooms
 * @throws {Error} If fetching fails
 */
export async function getAllConferenceRoomsService() {
  return await ConferenceRoom.findAll();
}

/**
 * Creates a new ConferenceRoom in the database
 * @async
 * @function createConferenceRoom
 * @param {object} roomData - The data required to create a new ConferenceRoom
 * @returns {Promise<object>} Newly created ConferenceRoom
 * @throws {Error} If creation fails
 */
export async function createConferenceRoomService(roomData) {
  return await ConferenceRoom.create({
    name: roomData.name,
    capacity: roomData.capacity,
    features: roomData.features || [],
    location: roomData.location,
    isAvailable: roomData.isAvailable !== false,
  });
}
