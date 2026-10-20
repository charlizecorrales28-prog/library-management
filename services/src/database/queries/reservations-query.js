// CREATE - Add a reservation
const CREATE_RESERVATION = `
  INSERT INTO reservations (
    student_id,
    book_id,
    status,
    expires_at,
    remarks
  )
  VALUES (?, ?, ?, ?, ?)
`;

// READ - Get all reservations
const FIND_ALL_RESERVATIONS = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  ORDER BY r.id DESC
`;

// READ - Get reservation by ID
const FIND_RESERVATION_BY_ID = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.id = ?
`;

// READ - Get reservations by student ID
const FIND_RESERVATIONS_BY_STUDENT_ID = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.student_id = ?
  ORDER BY r.reserved_at DESC
`;

// READ - Get reservations by book ID
const FIND_RESERVATIONS_BY_BOOK_ID = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.book_id = ?
  ORDER BY r.reserved_at ASC
`;

// READ - Get reservations by status
const FIND_RESERVATIONS_BY_STATUS = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.status = ?
  ORDER BY r.reserved_at ASC
`;

// READ - Get pending reservations
const FIND_PENDING_RESERVATIONS = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.status = 'Pending'
  ORDER BY r.reserved_at ASC
`;

// READ - Get expired pending reservations
const FIND_EXPIRED_RESERVATIONS = `
  SELECT
    r.id AS reservation_id,
    r.student_id,
    r.book_id,
    r.reserved_at,
    r.status,
    r.expires_at,
    r.remarks,
    r.created_at,
    r.updated_at
  FROM reservations AS r
  WHERE r.status = 'Pending'
    AND r.expires_at IS NOT NULL
    AND r.expires_at < NOW()
  ORDER BY r.expires_at ASC
`;

// UPDATE - Update reservation details
const UPDATE_RESERVATION = `
  UPDATE reservations AS r
  SET
    r.student_id = ?,
    r.book_id = ?,
    r.status = ?,
    r.expires_at = ?,
    r.remarks = ?
  WHERE r.id = ?
`;

// UPDATE - Update reservation status
const UPDATE_RESERVATION_STATUS = `
  UPDATE reservations AS r
  SET
    r.status = ?,
    r.remarks = ?
  WHERE r.id = ?
`;

// UPDATE - Update reservation expiration
const UPDATE_RESERVATION_EXPIRATION = `
  UPDATE reservations AS r
  SET
    r.expires_at = ?
  WHERE r.id = ?
`;

// UPDATE - Fulfill reservation
const FULFILL_RESERVATION = `
  UPDATE reservations AS r
  SET
    r.status = 'Fulfilled'
  WHERE r.id = ?
    AND r.status = 'Pending'
`;

// UPDATE - Cancel reservation
const CANCEL_RESERVATION = `
  UPDATE reservations AS r
  SET
    r.status = 'Cancelled'
  WHERE r.id = ?
    AND r.status = 'Pending'
`;

// UPDATE - Expire reservation
const EXPIRE_RESERVATION = `
  UPDATE reservations AS r
  SET
    r.status = 'Expired'
  WHERE r.id = ?
    AND r.status = 'Pending'
`;

// UPDATE - Expire all overdue pending reservations
const EXPIRE_PENDING_RESERVATIONS = `
  UPDATE reservations AS r
  SET
    r.status = 'Expired'
  WHERE r.status = 'Pending'
    AND r.expires_at IS NOT NULL
    AND r.expires_at < NOW()
`;

// DELETE - Delete reservation by ID
const DELETE_RESERVATION = `
  DELETE FROM reservations
  WHERE id = ?
`;

module.exports = {
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
};
