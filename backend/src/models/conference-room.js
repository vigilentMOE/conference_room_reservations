/**
 * Represents a conference room in a building.
 * @class
 * @param {Object} params - The conference room parameters
 * @param {string|number} params.id - Unique identifier for the conference room
 * @param {string} params.name - Name of the conference room
 * @param {number} params.capacity - Maximum number of people the room can accommodate
 * @param {Array<string>} [params.features=[]] - List of features/amenities available in the room
 * @param {string} params.location - Physical location of the conference room
 * @param {boolean} [params.isAvailable=true] - Availability status of the room
 * @throws {Error} Will throw an error if name, capacity, or location is missing
 * @throws {Error} Will throw an error if capacity is less than or equal to 0
 */
class ConferenceRoom {
    constructor({
      id,
      name,
      capacity,
      features = [],
      location,
      isAvailable = true
    }) {
      this.id = id;
      this.name = name;
      this.capacity = capacity;
      this.features = features;
      this.location = location;
      this.isAvailable = isAvailable;
    }
  
    validate() {
      if (!this.name || !this.capacity || !this.location) {
        throw new Error('Name, capacity, and location are required');
      }
      if (this.capacity <= 0) {
        throw new Error('Capacity must be greater than 0');
      }
    }
  }
  
  module.exports = ConferenceRoom;