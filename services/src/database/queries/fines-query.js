// CREATE - Add a fine
const CREATE_FINE = `
  INSERT INTO fines (
    borrowing_id,
    amount,
    reason,
    status,
    paid_at,
    remarks
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all fines
const FIND_ALL_FINES = `
  SELECT
    f.id AS fine_id,
    f.borrowing_id,
    f.amount,
    f.reason,
    f.status,
    f.paid_at,
    f.remarks,
    f.created_at,
    f.updated_at
  FROM fines AS f
  ORDER BY f.id DESC
`;

// READ - Get fine by ID
const FIND_FINE_BY_ID = `
  SELECT
    f.id AS fine_id,
    f.borrowing_id,
    f.amount,
    f.reason,
    f.status,
    f.paid_at,
    f.remarks,
    f.created_at,
    f.updated_at
  FROM fines AS f
  WHERE f.id = ?
`;

// READ - Get fines by borrowing ID
const FIND_FINES_BY_BORROWING_ID = `
  SELECT
    f.id AS fine_id,
    f.borrowing_id,
    f.amount,
    f.reason,
    f.status,
    f.paid_at,
    f.remarks,
    f.created_at,
    f.updated_at
  FROM fines AS f
  WHERE f.borrowing_id = ?
  ORDER BY f.created_at DESC
`;

// READ - Get fines by status
const FIND_FINES_BY_STATUS = `
  SELECT
    f.id AS fine_id,
    f.borrowing_id,
    f.amount,
    f.reason,
    f.status,
    f.paid_at,
    f.remarks,
    f.created_at,
    f.updated_at
  FROM fines AS f
  WHERE f.status = ?
  ORDER BY f.created_at DESC
`;

// READ - Get unpaid fines
const FIND_UNPAID_FINES = `
  SELECT
    f.id AS fine_id,
    f.borrowing_id,
    f.amount,
    f.reason,
    f.status,
    f.paid_at,
    f.remarks,
    f.created_at,
    f.updated_at
  FROM fines AS f
  WHERE f.status = 'Unpaid'
  ORDER BY f.created_at DESC
`;

// READ - Get total unpaid fines
const FIND_TOTAL_UNPAID_FINES = `
  SELECT
    COALESCE(SUM(f.amount), 0.00) AS total_unpaid
  FROM fines AS f
  WHERE f.status = 'Unpaid'
`;

// UPDATE - Update fine details
const UPDATE_FINE = `
  UPDATE fines AS f
  SET
    f.borrowing_id = ?,
    f.amount = ?,
    f.reason = ?,
    f.status = ?,
    f.paid_at = ?,
    f.remarks = ?
  WHERE f.id = ?
`;

// UPDATE - Update fine status
const UPDATE_FINE_STATUS = `
  UPDATE fines AS f
  SET
    f.status = ?,
    f.paid_at = ?,
    f.remarks = ?
  WHERE f.id = ?
`;

// UPDATE - Mark fine as paid
const PAY_FINE = `
  UPDATE fines AS f
  SET
    f.status = 'Paid',
    f.paid_at = CURRENT_TIMESTAMP
  WHERE f.id = ?
`;

// UPDATE - Waive a fine
const WAIVE_FINE = `
  UPDATE fines AS f
  SET
    f.status = 'Waived',
    f.paid_at = NULL,
    f.remarks = ?
  WHERE f.id = ?
`;

// DELETE - Delete fine by ID
const DELETE_FINE = `
  DELETE FROM fines
  WHERE id = ?
`;

// DELETE - Delete fines by borrowing ID
const DELETE_FINES_BY_BORROWING_ID = `
  DELETE FROM fines
  WHERE borrowing_id = ?
`;

module.exports = {
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
};
