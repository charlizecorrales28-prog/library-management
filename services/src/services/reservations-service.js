const db = require("../config/database.js");

const {
  CREATE_RESERVATION,
  FIND_ALL_RESERVATIONS,
  FIND_RESERVATION_BY_ID,
  FIND_RESERVATIONS_BY_STUDENT_ID,
  FIND_RESERVATIONS_BY_BOOK_ID,
  FIND_RESERVATIONS_BY_STATUS,
  FIND_PENDING_RESERVATIONS,
  FIND_EXPIRED_RESERVATIONS,
  UPDATE_RESERVATION,
  UPDATE_RESERVATION_STATUS,
  UPDATE_RESERVATION_EXPIRATION,
  FULFILL_RESERVATION,
  CANCEL_RESERVATION,
  EXPIRE_RESERVATION,
  EXPIRE_PENDING_RESERVATIONS,
  DELETE_RESERVATION,
} = require("../database/queries/reservations-query.js");

// CREATE - Add a reservation
const createReservation = async (student_id, book_id, status = "Pending", expires_at = null, remarks = null) => {
  if (!student_id || !book_id) {
    throw new Error("Student ID and book ID are required.");
  }

  const [result] = await db.query(CREATE_RESERVATION, [student_id, book_id, status, expires_at, remarks]);

  return result;
};

// READ - Get all reservations
const findAllReservations = async () => {
  const [rows] = await db.query(FIND_ALL_RESERVATIONS);

  return rows;
};

// READ - Get reservation by ID
const findReservationById = async (id) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  const [rows] = await db.query(FIND_RESERVATION_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get reservations by student ID
const findReservationsByStudentId = async (student_id) => {
  if (!student_id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_RESERVATIONS_BY_STUDENT_ID, [student_id]);

  return rows;
};

// READ - Get reservations by book ID
const findReservationsByBookId = async (book_id) => {
  if (!book_id) {
    throw new Error("Book ID is required.");
  }

  const [rows] = await db.query(FIND_RESERVATIONS_BY_BOOK_ID, [book_id]);

  return rows;
};

// READ - Get reservations by status
const findReservationsByStatus = async (status) => {
  if (!status) {
    throw new Error("Reservation status is required.");
  }

  const [rows] = await db.query(FIND_RESERVATIONS_BY_STATUS, [status]);

  return rows;
};

// READ - Get pending reservations
const findPendingReservations = async () => {
  const [rows] = await db.query(FIND_PENDING_RESERVATIONS);

  return rows;
};

// READ - Get expired pending reservations
const findExpiredReservations = async () => {
  const [rows] = await db.query(FIND_EXPIRED_RESERVATIONS);

  return rows;
};

// UPDATE - Update reservation details
const updateReservation = async (id, student_id, book_id, status, expires_at, remarks) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  if (!student_id || !book_id || !status) {
    throw new Error("Student ID, book ID, and reservation status are required.");
  }

  const [result] = await db.query(UPDATE_RESERVATION, [student_id, book_id, status, expires_at, remarks, id]);

  return result;
};

// UPDATE - Update reservation status
const updateReservationStatus = async (id, status, remarks = null) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  if (!status) {
    throw new Error("Reservation status is required.");
  }

  const [result] = await db.query(UPDATE_RESERVATION_STATUS, [status, remarks, id]);

  return result;
};

// UPDATE - Update reservation expiration
const updateReservationExpiration = async (id, expires_at) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  if (expires_at === undefined) {
    throw new Error("Reservation expiration date is required.");
  }

  const [result] = await db.query(UPDATE_RESERVATION_EXPIRATION, [expires_at, id]);

  return result;
};

// UPDATE - Fulfill reservation
const fulfillReservation = async (id) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  const [result] = await db.query(FULFILL_RESERVATION, [id]);

  return result;
};

// UPDATE - Cancel reservation
const cancelReservation = async (id) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  const [result] = await db.query(CANCEL_RESERVATION, [id]);

  return result;
};

// UPDATE - Expire reservation
const expireReservation = async (id) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  const [result] = await db.query(EXPIRE_RESERVATION, [id]);

  return result;
};

// UPDATE - Expire all overdue pending reservations
const expirePendingReservations = async () => {
  const [result] = await db.query(EXPIRE_PENDING_RESERVATIONS);

  return result;
};

// DELETE - Delete reservation by ID
const deleteReservation = async (id) => {
  if (!id) {
    throw new Error("Reservation ID is required.");
  }

  const [result] = await db.query(DELETE_RESERVATION, [id]);

  return result;
};

module.exports = {
  createReservation,
  findAllReservations,
  findReservationById,
  findReservationsByStudentId,
  findReservationsByBookId,
  findReservationsByStatus,
  findPendingReservations,
  findExpiredReservations,
  updateReservation,
  updateReservationStatus,
  updateReservationExpiration,
  fulfillReservation,
  cancelReservation,
  expireReservation,
  expirePendingReservations,
  deleteReservation,
};
