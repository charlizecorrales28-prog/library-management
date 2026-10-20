const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const staffService = require("../services/staff-service.js");

// CREATE - Add a staff member
const createStaff = async (req, res) => {
  try {
    const { account_id, role_id, lastname, firstname, contact_no = null, email = null } = req.body;

    const result = await staffService.createStaff(account_id, role_id, lastname, firstname, contact_no, email);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Staff member created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create staff error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all staff members
const findAllStaffs = async (req, res) => {
  try {
    const result = await staffService.findAllStaffs();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff members retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all staff members error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get staff member by ID
const findStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await staffService.findStaffById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff member not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff member retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff member by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get staff member by account ID
const findStaffByAccountId = async (req, res) => {
  try {
    const { account_id } = req.params;

    const result = await staffService.findStaffByAccountId(account_id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff member not found for this account.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff member retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff member by account ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get staff member by email
const findStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await staffService.findStaffByEmail(email);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff member not found for this email.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff member retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff member by email error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update staff member details
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { account_id, role_id, lastname, firstname, contact_no = null, email = null } = req.body;

    const result = await staffService.updateStaff(id, account_id, role_id, lastname, firstname, contact_no, email);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff member not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff member updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update staff member error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete staff member by ID
const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await staffService.deleteStaff(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff member not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff member deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete staff member error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};
