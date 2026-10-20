// CREATE - Add a book copy
const CREATE_BOOK_COPY = `
  INSERT INTO book_copies (
    book_id,
    accession_number,
    barcode,
    status,
    condition_status,
    acquired_at
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all book copies
const FIND_ALL_BOOK_COPIES = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  ORDER BY bc.id DESC
`;

// READ - Get book copy by ID
const FIND_BOOK_COPY_BY_ID = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  WHERE bc.id = ?
`;

// READ - Get book copies by book ID
const FIND_BOOK_COPIES_BY_BOOK_ID = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  WHERE bc.book_id = ?
  ORDER BY bc.id DESC
`;

// READ - Get book copy by accession number
const FIND_BOOK_COPY_BY_ACCESSION_NUMBER = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  WHERE bc.accession_number = ?
`;

// READ - Get book copy by barcode
const FIND_BOOK_COPY_BY_BARCODE = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  WHERE bc.barcode = ?
`;

// READ - Get book copies by status
const FIND_BOOK_COPIES_BY_STATUS = `
  SELECT
    bc.id AS book_copy_id,
    bc.book_id,
    bc.accession_number,
    bc.barcode,
    bc.status,
    bc.condition_status,
    bc.acquired_at,
    bc.created_at,
    bc.updated_at
  FROM book_copies AS bc
  WHERE bc.status = ?
  ORDER BY bc.id DESC
`;

// UPDATE - Update book copy details
const UPDATE_BOOK_COPY = `
  UPDATE book_copies AS bc
  SET
    bc.book_id = ?,
    bc.accession_number = ?,
    bc.barcode = ?,
    bc.status = ?,
    bc.condition_status = ?,
    bc.acquired_at = ?
  WHERE bc.id = ?
`;

// UPDATE - Update book copy status
const UPDATE_BOOK_COPY_STATUS = `
  UPDATE book_copies AS bc
  SET
    bc.status = ?
  WHERE bc.id = ?
`;

// UPDATE - Update book copy condition
const UPDATE_BOOK_COPY_CONDITION = `
  UPDATE book_copies AS bc
  SET
    bc.condition_status = ?
  WHERE bc.id = ?
`;

// DELETE - Delete book copy by ID
const DELETE_BOOK_COPY = `
  DELETE FROM book_copies
  WHERE id = ?
`;

// DELETE - Delete all copies of a book
const DELETE_BOOK_COPIES_BY_BOOK_ID = `
  DELETE FROM book_copies
  WHERE book_id = ?
`;

module.exports = {
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
};
