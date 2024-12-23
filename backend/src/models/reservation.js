/**
 * Represents a reservation for a resource.
 * @class
 * @property {string|number} id - The unique identifier of the reservation
 * @property {string|number} resourceId - The ID of the resource being reserved
 * @property {string|number} userId - The ID of the user making the reservation
 * @property {Date} startTime - The start time of the reservation
 * @property {Date} endTime - The end time of the reservation
 * @throws {Error} When required fields are missing or when start time is not before end time
 */
class Reservation {
    constructor({id, resourceId, userId, startTime, endTime}) {
      this.id = id;
      this.resourceId = resourceId;
      this.userId = userId;
      this.startTime = new Date(startTime);
      this.endTime = new Date(endTime);
    }
  
    validate() {
      if (!this.resourceId || !this.userId || !this.startTime || !this.endTime) {
        throw new Error('Missing required fields');
      }
      if (this.startTime >= this.endTime) {
        throw new Error('Start time must be before end time');
      }
    }
  }
  
  module.exports = Reservation;