const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const schoolYearsService = require("../services/school_years-service.js");

// CREATE - Add a school year
const createSchoolYear = async (req, res) => {
  try {
    const { staff_id, school_year, start_date, end_date, is_active = 0 } = req.body;

    const result = await schoolYearsService.createSchoolYear(staff_id, school_year, start_date, end_date, is_active);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "School year created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create school year error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all school years
const findAllSchoolYears = async (req, res) => {
  try {
    const result = await schoolYearsService.findAllSchoolYears();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School years retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all school years error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get school year by ID
const findSchoolYearById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await schoolYearsService.findSchoolYearById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find school year by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get school year by year
const findSchoolYearByYear = async (req, res) => {
  try {
    const { school_year } = req.params;

    const result = await schoolYearsService.findSchoolYearByYear(school_year);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find school year by year error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get active school year
const findActiveSchoolYear = async (req, res) => {
  try {
    const result = await schoolYearsService.findActiveSchoolYear();

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No active school year found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Active school year retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find active school year error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE - Update school year details
const updateSchoolYear = async (req, res) => {
  try {
    const { id } = req.params;
    const { staff_id, school_year, start_date, end_date, is_active } = req.body;

    const result = await schoolYearsService.updateSchoolYear(
      id,
      staff_id,
      school_year,
      start_date,
      end_date,
      is_active,
    );

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update school year error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete school year by ID
const deleteSchoolYear = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await schoolYearsService.deleteSchoolYear(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete school year error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createSchoolYear,
  findAllSchoolYears,
  findSchoolYearById,
  findSchoolYearByYear,
  findActiveSchoolYear,
  updateSchoolYear,
  deleteSchoolYear,
};
