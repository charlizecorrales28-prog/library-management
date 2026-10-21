const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const studentsService = require("../services/students-service.js");

// CREATE - Add a student
const createStudent = async (req, res) => {
  try {
    const { grade_section_id, account_id = null, lastname, firstname, middlename = null, contact_no = null } = req.body;

    const result = await studentsService.createStudent(
      grade_section_id,
      account_id,
      lastname,
      firstname,
      middlename,
      contact_no,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Student created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create student error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all students
const findAllStudents = async (req, res) => {
  try {
    const result = await studentsService.findAllStudents();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all students error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get student by ID
const findStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentsService.findStudentById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get student by account ID
const findStudentByAccountId = async (req, res) => {
  try {
    const { account_id } = req.params;
    const result = await studentsService.findStudentByAccountId(account_id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found for this account.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by account ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get students by grade section ID
const findStudentsByGradeSectionId = async (req, res) => {
  try {
    const { grade_section_id } = req.params;
    const result = await studentsService.findStudentsByGradeSectionId(grade_section_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find students by grade section ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Search students by name
const searchStudentsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await studentsService.searchStudentsByName(name);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student search completed successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Search students by name error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Find student by contact number
const findStudentByContactNo = async (req, res) => {
  try {
    const { contact_no } = req.params;
    const result = await studentsService.findStudentByContactNo(contact_no);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found for this contact number.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by contact number error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update student details
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_section_id, account_id = null, lastname, firstname, middlename = null, contact_no = null } = req.body;

    const result = await studentsService.updateStudent(
      id,
      grade_section_id,
      account_id,
      lastname,
      firstname,
      middlename,
      contact_no,
    );

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update student error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update student grade section
const updateStudentGradeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_section_id } = req.body;

    const result = await studentsService.updateStudentGradeSection(id, grade_section_id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found or grade section unchanged.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student grade section updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update student grade section error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Link student to an account
const linkStudentAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { account_id } = req.body;

    const result = await studentsService.linkStudentAccount(id, account_id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found or account link unchanged.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student account linked successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Link student account error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Unlink student account
const unlinkStudentAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentsService.unlinkStudentAccount(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found or account already unlinked.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student account unlinked successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Unlink student account error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete student by ID
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentsService.deleteStudent(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete student error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
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
