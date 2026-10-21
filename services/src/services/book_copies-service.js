const db = require("../config/database.js");

const {
  CREATE_BOOK_COPY,
  FIND_ALL_BOOK_COPIES,
  FIND_BOOK_COPY_BY_ID,
  FIND_BOOK_COPIES_BY_BOOK_ID,
  FIND_BOOK_COPY_BY_ACCESSION_NUMBER,
  FIND_BOOK_COPY_BY_BARCODE,
  FIND_BOOK_COPIES_BY_STATUS,
  UPDATE_BOOK_COPY,
  UPDATE_BOOK_COPY_STATUS,
  UPDATE_BOOK_COPY_CONDITION,
  DELETE_BOOK_COPY,
  DELETE_BOOK_COPIES_BY_BOOK_ID,
} = require("../database/queries/book_copies-query.js");

// CREATE - Add a book copy
const createBookCopy = async (book_id, accession_number, barcode, status, condition_status, acquired_at) => {
  if (!book_id || !accession_number || !barcode || !status || !condition_status) {
    throw new Error("Book ID, accession number, barcode, status, and condition are required.");
  }

  const [result] = await db.query(CREATE_BOOK_COPY, [
    book_id,
    accession_number,
    barcode,
    status,
    condition_status,
    acquired_at,
  ]);

  return result;
};

// READ - Get all book copies
const findAllBookCopies = async () => {
  const [rows] = await db.query(FIND_ALL_BOOK_COPIES);

  return rows;
};

// READ - Get book copy by ID
const findBookCopyById = async (id) => {
  if (!id) {
    throw new Error("Book copy ID is required.");
  }

  const [rows] = await db.query(FIND_BOOK_COPY_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get book copies by book ID
const findBookCopiesByBookId = async (book_id) => {
  if (!book_id) {
    throw new Error("Book ID is required.");
  }

  const [rows] = await db.query(FIND_BOOK_COPIES_BY_BOOK_ID, [book_id]);

  return rows;
};

// READ - Get book copy by accession number
const findBookCopyByAccessionNumber = async (accession_number) => {
  if (!accession_number) {
    throw new Error("Accession number is required.");
  }

  const [rows] = await db.query(FIND_BOOK_COPY_BY_ACCESSION_NUMBER, [accession_number]);

  return rows[0] || null;
};

// READ - Get book copy by barcode
const findBookCopyByBarcode = async (barcode) => {
  if (!barcode) {
    throw new Error("Barcode is required.");
  }

  const [rows] = await db.query(FIND_BOOK_COPY_BY_BARCODE, [barcode]);

  return rows[0] || null;
};

// READ - Get book copies by status
const findBookCopiesByStatus = async (status) => {
  if (!status) {
    throw new Error("Book copy status is required.");
  }

  const [rows] = await db.query(FIND_BOOK_COPIES_BY_STATUS, [status]);

  return rows;
};

// UPDATE - Update book copy details
const updateBookCopy = async (id, book_id, accession_number, barcode, status, condition_status, acquired_at) => {
  if (!id) {
    throw new Error("Book copy ID is required.");
  }

  if (!book_id || !accession_number || !barcode || !status || !condition_status) {
    throw new Error("Book ID, accession number, barcode, status, and condition are required.");
  }

  const [result] = await db.query(UPDATE_BOOK_COPY, [
    book_id,
    accession_number,
    barcode,
    status,
    condition_status,
    acquired_at,
    id,
  ]);

  return result;
};

// UPDATE - Update book copy status
const updateBookCopyStatus = async (id, status) => {
  if (!id) {
    throw new Error("Book copy ID is required.");
  }

  if (!status) {
    throw new Error("Book copy status is required.");
  }

  const [result] = await db.query(UPDATE_BOOK_COPY_STATUS, [status, id]);

  return result;
};

// UPDATE - Update book copy condition
const updateBookCopyCondition = async (id, condition_status) => {
  if (!id) {
    throw new Error("Book copy ID is required.");
  }

  if (!condition_status) {
    throw new Error("Book copy condition is required.");
  }

  const [result] = await db.query(UPDATE_BOOK_COPY_CONDITION, [condition_status, id]);

  return result;
};

// DELETE - Delete book copy by ID
const deleteBookCopy = async (id) => {
  if (!id) {
    throw new Error("Book copy ID is required.");
  }

  const [result] = await db.query(DELETE_BOOK_COPY, [id]);

  return result;
};

// DELETE - Delete all copies of a book
const deleteBookCopiesByBookId = async (book_id) => {
  if (!book_id) {
    throw new Error("Book ID is required.");
  }

  const [result] = await db.query(DELETE_BOOK_COPIES_BY_BOOK_ID, [book_id]);

  return result;
};

module.exports = {
  createBookCopy,
  findAllBookCopies,
  findBookCopyById,
  findBookCopiesByBookId,
  findBookCopyByAccessionNumber,
  findBookCopyByBarcode,
  findBookCopiesByStatus,
  updateBookCopy,
  updateBookCopyStatus,
  updateBookCopyCondition,
  deleteBookCopy,
  deleteBookCopiesByBookId,
};
