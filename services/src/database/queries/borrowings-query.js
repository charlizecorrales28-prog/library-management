// CREATE - Record a new borrowing
const CREATE_BORROWING = `
  INSERT INTO borrowings (
    student_id,
    book_copy_id,
    due_at,
    status,
    remarks
  )
  VALUES (?, ?, ?, ?, ?)
`;

// READ - Get all borrowings
const FIND_ALL_BORROWINGS = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  ORDER BY br.id DESC
`;

// READ - Get borrowing by ID
const FIND_BORROWING_BY_ID = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  WHERE br.id = ?
`;

// READ - Get borrowings by student ID
const FIND_BORROWINGS_BY_STUDENT_ID = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  WHERE br.student_id = ?
  ORDER BY br.borrowed_at DESC
`;

// READ - Get borrowings by book copy ID
const FIND_BORROWINGS_BY_BOOK_COPY_ID = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  WHERE br.book_copy_id = ?
  ORDER BY br.borrowed_at DESC
`;

// READ - Get borrowings by status
const FIND_BORROWINGS_BY_STATUS = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  WHERE br.status = ?
  ORDER BY br.borrowed_at DESC
`;

// READ - Get overdue borrowings
const FIND_OVERDUE_BORROWINGS = `
  SELECT
    br.id AS borrowing_id,
    br.student_id,
    br.book_copy_id,
    br.borrowed_at,
    br.due_at,
    br.status,
    br.remarks,
    br.created_at,
    br.updated_at
  FROM borrowings AS br
  WHERE br.due_at < NOW()
    AND br.status = 'Borrowed'
  ORDER BY br.due_at ASC
`;

// UPDATE - Update borrowing details
const UPDATE_BORROWING = `
  UPDATE borrowings AS br
  SET
    br.student_id = ?,
    br.book_copy_id = ?,
    br.due_at = ?,
    br.status = ?,
    br.remarks = ?
  WHERE br.id = ?
`;

// UPDATE - Update borrowing status
const UPDATE_BORROWING_STATUS = `
  UPDATE borrowings AS br
  SET
    br.status = ?,
    br.remarks = ?
  WHERE br.id = ?
`;

// UPDATE - Extend borrowing due date
const UPDATE_BORROWING_DUE_DATE = `
  UPDATE borrowings AS br
  SET
    br.due_at = ?
  WHERE br.id = ?
`;

// UPDATE - Mark borrowing as returned
const RETURN_BORROWING = `
  UPDATE borrowings AS br
  SET
    br.status = 'Returned'
  WHERE br.id = ?
`;

// DELETE - Delete borrowing by ID
const DELETE_BORROWING = `
  DELETE FROM borrowings
  WHERE id = ?
`;

module.exports = {
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
};
