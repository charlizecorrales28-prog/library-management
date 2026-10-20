const db = require("../config/database.js");

const {
  CREATE_FINE,
  FIND_ALL_FINES,
  FIND_FINE_BY_ID,
  FIND_FINES_BY_BORROWING_ID,
  FIND_FINES_BY_STATUS,
  FIND_UNPAID_FINES,
  FIND_TOTAL_UNPAID_FINES,
  UPDATE_FINE,
  UPDATE_FINE_STATUS,
  PAY_FINE,
  WAIVE_FINE,
  DELETE_FINE,
  DELETE_FINES_BY_BORROWING_ID,
} = require("../database/queries/fines-query.js");

// CREATE - Add a fine
const createFine = async (borrowing_id, amount, reason, status, paid_at, remarks) => {
  if (!borrowing_id || amount == null || !reason || !status) {
    throw new Error("Borrowing ID, amount, reason, and status are required.");
  }

  if (Number(amount) < 0 || !Number.isFinite(Number(amount))) {
    throw new Error("Fine amount must be a valid non-negative number.");
  }

  const [result] = await db.query(CREATE_FINE, [borrowing_id, amount, reason, status, paid_at, remarks]);

  return result;
};

// READ - Get all fines
const findAllFines = async () => {
  const [rows] = await db.query(FIND_ALL_FINES);

  return rows;
};

// READ - Get fine by ID
const findFineById = async (id) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  const [rows] = await db.query(FIND_FINE_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get fines by borrowing ID
const findFinesByBorrowingId = async (borrowing_id) => {
  if (!borrowing_id) {
    throw new Error("Borrowing ID is required.");
  }

  const [rows] = await db.query(FIND_FINES_BY_BORROWING_ID, [borrowing_id]);

  return rows;
};

// READ - Get fines by status
const findFinesByStatus = async (status) => {
  if (!status) {
    throw new Error("Fine status is required.");
  }

  const [rows] = await db.query(FIND_FINES_BY_STATUS, [status]);

  return rows;
};

// READ - Get unpaid fines
const findUnpaidFines = async () => {
  const [rows] = await db.query(FIND_UNPAID_FINES);

  return rows;
};

// READ - Get total unpaid fines
const findTotalUnpaidFines = async () => {
  const [rows] = await db.query(FIND_TOTAL_UNPAID_FINES);

  return rows[0];
};

// UPDATE - Update fine details
const updateFine = async (id, borrowing_id, amount, reason, status, paid_at, remarks) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  if (!borrowing_id || amount == null || !reason || !status) {
    throw new Error("Borrowing ID, amount, reason, and status are required.");
  }

  if (Number(amount) < 0 || !Number.isFinite(Number(amount))) {
    throw new Error("Fine amount must be a valid non-negative number.");
  }

  const [result] = await db.query(UPDATE_FINE, [borrowing_id, amount, reason, status, paid_at, remarks, id]);

  return result;
};

// UPDATE - Update fine status
const updateFineStatus = async (id, status, paid_at, remarks) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  if (!status) {
    throw new Error("Fine status is required.");
  }

  const [result] = await db.query(UPDATE_FINE_STATUS, [status, paid_at, remarks, id]);

  return result;
};

// UPDATE - Mark fine as paid
const payFine = async (id) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  const [result] = await db.query(PAY_FINE, [id]);

  return result;
};

// UPDATE - Waive a fine
const waiveFine = async (id, remarks) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  const [result] = await db.query(WAIVE_FINE, [remarks ?? null, id]);

  return result;
};

// DELETE - Delete fine by ID
const deleteFine = async (id) => {
  if (!id) {
    throw new Error("Fine ID is required.");
  }

  const [result] = await db.query(DELETE_FINE, [id]);

  return result;
};

// DELETE - Delete fines by borrowing ID
const deleteFinesByBorrowingId = async (borrowing_id) => {
  if (!borrowing_id) {
    throw new Error("Borrowing ID is required.");
  }

  const [result] = await db.query(DELETE_FINES_BY_BORROWING_ID, [borrowing_id]);

  return result;
};

module.exports = {
  createFine,
  findAllFines,
  findFineById,
  findFinesByBorrowingId,
  findFinesByStatus,
  findUnpaidFines,
  findTotalUnpaidFines,
  updateFine,
  updateFineStatus,
  payFine,
  waiveFine,
  deleteFine,
  deleteFinesByBorrowingId,
};
