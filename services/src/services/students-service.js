const db = require("../config/database.js");

const {
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
} = require("../database/queries/students-query.js");

// CREATE - Add a student
const createStudent = async (
  grade_section_id,
  account_id,
  lastname,
  firstname,
  middlename = null,
  contact_no = null,
) => {
  if (!grade_section_id || !lastname || !firstname) {
    throw new Error("Grade section ID, last name, and first name are required.");
  }

  const [result] = await db.query(CREATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
  ]);

  return result;
};

// READ - Get all students
const findAllStudents = async () => {
  const [rows] = await db.query(FIND_ALL_STUDENTS);

  return rows;
};

// READ - Get student by ID
const findStudentById = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get student by account ID
const findStudentByAccountId = async (account_id) => {
  if (!account_id) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ACCOUNT_ID, [account_id]);

  return rows[0] || null;
};

// READ - Get students by grade section ID
const findStudentsByGradeSectionId = async (grade_section_id) => {
  if (!grade_section_id) {
    throw new Error("Grade section ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENTS_BY_GRADE_SECTION_ID, [grade_section_id]);

  return rows;
};

// READ - Search students by name
const searchStudentsByName = async (name) => {
  if (!name || !name.trim()) {
    throw new Error("Student name is required.");
  }

  const searchTerm = `%${name.trim()}%`;

  const [rows] = await db.query(SEARCH_STUDENTS_BY_NAME, [searchTerm, searchTerm, searchTerm]);

  return rows;
};

// READ - Find student by contact number
const findStudentByContactNo = async (contact_no) => {
  if (!contact_no) {
    throw new Error("Contact number is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_CONTACT_NO, [contact_no]);

  return rows[0] || null;
};

// UPDATE - Update student details
const updateStudent = async (
  id,
  grade_section_id,
  account_id,
  lastname,
  firstname,
  middlename = null,
  contact_no = null,
) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  if (!grade_section_id || !lastname || !firstname) {
    throw new Error("Grade section ID, last name, and first name are required.");
  }

  const [result] = await db.query(UPDATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
    id,
  ]);

  return result;
};

// UPDATE - Update student grade section
const updateStudentGradeSection = async (id, grade_section_id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  if (!grade_section_id) {
    throw new Error("Grade section ID is required.");
  }

  const [result] = await db.query(UPDATE_STUDENT_GRADE_SECTION, [grade_section_id, id]);

  return result;
};

// UPDATE - Link student to an account
const linkStudentAccount = async (id, account_id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  if (!account_id) {
    throw new Error("Account ID is required.");
  }

  const [result] = await db.query(LINK_STUDENT_ACCOUNT, [account_id, id]);

  return result;
};

// UPDATE - Unlink student account
const unlinkStudentAccount = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [result] = await db.query(UNLINK_STUDENT_ACCOUNT, [id]);

  return result;
};

// DELETE - Delete student by ID
const deleteStudent = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [result] = await db.query(DELETE_STUDENT, [id]);

  return result;
};

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  findStudentByAccountId,
  findStudentsByGradeSectionId,
  searchStudentsByName,
  findStudentByContactNo,
  updateStudent,
  updateStudentGradeSection,
  linkStudentAccount,
  unlinkStudentAccount,
  deleteStudent,
};
