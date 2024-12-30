import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

/**
 * Represents a Conference Room in the reservation system.
 *
 * @typedef {Object} ConferenceRoom
 * @property {number} id - The unique identifier for the conference room.
 * @property {string} name - The name of the conference room.
 * @property {number} capacity - The capacity of the room, must be at least 1.
 * @property {string[]} features - An array of features available in the room.
 * @property {string} location - The physical location of the conference room.
 * @property {boolean} isAvailable - Indicates if the room is currently available.
 */
export const ConferenceRoom = sequelize.define("ConferenceRoom", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  features: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

/**
 * Represents a reservation in the conference room reservation system.
 *
 * @typedef {Object} Reservation
 * @property {number} id - The unique identifier for the reservation.
 * @property {Date} startTime - The start time of the reservation.
 * @property {Date} endTime - The end time of the reservation.
 * @property {number} userId - The ID of the user who made the reservation.
 */
export const Reservation = sequelize.define("Reservation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Associations
ConferenceRoom.hasMany(Reservation);
Reservation.belongsTo(ConferenceRoom);

export default sequelize;
