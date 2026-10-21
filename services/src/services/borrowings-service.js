const db = require("../config/database.js");

const {
  CREATE_BORROWING,
  FIND_ALL_BORROWINGS,
  FIND_BORROWING_BY_ID,
  FIND_BORROWINGS_BY_STUDENT_ID,
  FIND_BORROWINGS_BY_BOOK_COPY_ID,
  FIND_BORROWINGS_BY_STATUS,
  FIND_OVERDUE_BORROWINGS,
  UPDATE_BORROWING,
  UPDATE_BORROWING_STATUS,
  UPDATE_BORROWING_DUE_DATE,
  RETURN_BORROWING,
  DELETE_BORROWING,
} = require("../database/queries/borrowings-query.js");

// CREATE - Record a new borrowing
const createBorrowing = async (student_id, book_copy_id, due_at, status, remarks) => {
  if (!student_id || !book_copy_id || !due_at || !status) {
    throw new Error("Student ID, book copy ID, due date, and status are required.");
  }

  const [result] = await db.query(CREATE_BORROWING, [student_id, book_copy_id, due_at, status, remarks]);

  return result;
};

// READ - Get all borrowings
const findAllBorrowings = async () => {
  const [rows] = await db.query(FIND_ALL_BORROWINGS);

  return rows;
};

// READ - Get borrowing by ID
const findBorrowingById = async (id) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  const [rows] = await db.query(FIND_BORROWING_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get borrowings by student ID
const findBorrowingsByStudentId = async (student_id) => {
  if (!student_id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_BORROWINGS_BY_STUDENT_ID, [student_id]);

  return rows;
};

// READ - Get borrowings by book copy ID
const findBorrowingsByBookCopyId = async (book_copy_id) => {
  if (!book_copy_id) {
    throw new Error("Book copy ID is required.");
  }

  const [rows] = await db.query(FIND_BORROWINGS_BY_BOOK_COPY_ID, [book_copy_id]);

  return rows;
};

// READ - Get borrowings by status
const findBorrowingsByStatus = async (status) => {
  if (!status) {
    throw new Error("Borrowing status is required.");
  }

  const [rows] = await db.query(FIND_BORROWINGS_BY_STATUS, [status]);

  return rows;
};

// READ - Get overdue borrowings
const findOverdueBorrowings = async () => {
  const [rows] = await db.query(FIND_OVERDUE_BORROWINGS);

  return rows;
};

// UPDATE - Update borrowing details
const updateBorrowing = async (id, student_id, book_copy_id, due_at, status, remarks) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  if (!student_id || !book_copy_id || !due_at || !status) {
    throw new Error("Student ID, book copy ID, due date, and status are required.");
  }

  const [result] = await db.query(UPDATE_BORROWING, [student_id, book_copy_id, due_at, status, remarks, id]);

  return result;
};

// UPDATE - Update borrowing status
const updateBorrowingStatus = async (id, status, remarks) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  if (!status) {
    throw new Error("Borrowing status is required.");
  }

  const [result] = await db.query(UPDATE_BORROWING_STATUS, [status, remarks, id]);

  return result;
};

// UPDATE - Extend borrowing due date
const updateBorrowingDueDate = async (id, due_at) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  if (!due_at) {
    throw new Error("Borrowing due date is required.");
  }

  const [result] = await db.query(UPDATE_BORROWING_DUE_DATE, [due_at, id]);

  return result;
};

// UPDATE - Mark borrowing as returned
const returnBorrowing = async (id) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  const [result] = await db.query(RETURN_BORROWING, [id]);

  return result;
};

// DELETE - Delete borrowing by ID
const deleteBorrowing = async (id) => {
  if (!id) {
    throw new Error("Borrowing ID is required.");
  }

  const [result] = await db.query(DELETE_BORROWING, [id]);

  return result;
};

module.exports = {
  createBorrowing,
  findAllBorrowings,
  findBorrowingById,
  findBorrowingsByStudentId,
  findBorrowingsByBookCopyId,
  findBorrowingsByStatus,
  findOverdueBorrowings,
  updateBorrowing,
  updateBorrowingStatus,
  updateBorrowingDueDate,
  returnBorrowing,
  deleteBorrowing,
};
