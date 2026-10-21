// CREATE - Add a student
const CREATE_STUDENT = `
  INSERT INTO students (
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all students
const FIND_ALL_STUDENTS = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  ORDER BY s.lastname ASC, s.firstname ASC
`;

// READ - Get student by ID
const FIND_STUDENT_BY_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.id = ?
`;

// READ - Get student by account ID
const FIND_STUDENT_BY_ACCOUNT_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.account_id = ?
`;

// READ - Get students by grade section ID
const FIND_STUDENTS_BY_GRADE_SECTION_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.grade_section_id = ?
  ORDER BY s.lastname ASC, s.firstname ASC
`;

// READ - Search students by name
const SEARCH_STUDENTS_BY_NAME = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.lastname LIKE ?
     OR s.firstname LIKE ?
     OR s.middlename LIKE ?
  ORDER BY s.lastname ASC, s.firstname ASC
`;

// READ - Find student by contact number
const FIND_STUDENT_BY_CONTACT_NO = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.contact_no = ?
`;

// UPDATE - Update student details
const UPDATE_STUDENT = `
  UPDATE students AS s
  SET
    s.grade_section_id = ?,
    s.account_id = ?,
    s.lastname = ?,
    s.firstname = ?,
    s.middlename = ?,
    s.contact_no = ?
  WHERE s.id = ?
`;

// UPDATE - Update student grade section
const UPDATE_STUDENT_GRADE_SECTION = `
  UPDATE students AS s
  SET
    s.grade_section_id = ?
  WHERE s.id = ?
`;

// UPDATE - Link student to an account
const LINK_STUDENT_ACCOUNT = `
  UPDATE students AS s
  SET
    s.account_id = ?
  WHERE s.id = ?
`;

// UPDATE - Unlink student account
const UNLINK_STUDENT_ACCOUNT = `
  UPDATE students AS s
  SET
    s.account_id = NULL
  WHERE s.id = ?
`;

// DELETE - Delete student by ID
const DELETE_STUDENT = `
  DELETE FROM students
  WHERE id = ?
`;

module.exports = {
  CREATE_STUDENT,
  FIND_ALL_STUDENTS,
  FIND_STUDENT_BY_ID,
  FIND_STUDENT_BY_ACCOUNT_ID,
  FIND_STUDENTS_BY_GRADE_SECTION_ID,
  SEARCH_STUDENTS_BY_NAME,
  FIND_STUDENT_BY_CONTACT_NO,
  UPDATE_STUDENT,
  UPDATE_STUDENT_GRADE_SECTION,
  LINK_STUDENT_ACCOUNT,
  UNLINK_STUDENT_ACCOUNT,
  DELETE_STUDENT,
};
