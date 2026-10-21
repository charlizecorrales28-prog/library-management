const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const gradeSectionsService = require("../services/grade_sections-service.js");

// CREATE - Add a grade section
const createGradeSection = async (req, res) => {
  try {
    const { school_year_id, grade_n_strand_id, adviser_staff_id, section_name, description } = req.body;

    const result = await gradeSectionsService.createGradeSection(
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Grade section created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create grade section error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all grade sections
const findAllGradeSections = async (req, res) => {
  try {
    const result = await gradeSectionsService.findAllGradeSections();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all grade sections error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get grade section by ID
const findGradeSectionById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeSectionsService.findGradeSectionById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade section by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get grade sections by school year
const findGradeSectionsBySchoolYear = async (req, res) => {
  try {
    const { school_year_id } = req.params;

    const result = await gradeSectionsService.findGradeSectionsBySchoolYear(school_year_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by school year error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get grade sections by grade and strand
const findGradeSectionsByGradeNStrand = async (req, res) => {
  try {
    const { grade_n_strand_id } = req.params;

    const result = await gradeSectionsService.findGradeSectionsByGradeNStrand(grade_n_strand_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by grade and strand error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get grade sections by adviser
const findGradeSectionsByAdviser = async (req, res) => {
  try {
    const { adviser_staff_id } = req.params;

    const result = await gradeSectionsService.findGradeSectionsByAdviser(adviser_staff_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by adviser error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Check specific grade section
const findGradeSection = async (req, res) => {
  try {
    const { school_year_id, grade_n_strand_id, section_name } = req.query;

    const result = await gradeSectionsService.findGradeSection(school_year_id, grade_n_strand_id, section_name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find specific grade section error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update grade section details
const updateGradeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { school_year_id, grade_n_strand_id, adviser_staff_id, section_name, description } = req.body;

    const result = await gradeSectionsService.updateGradeSection(
      id,
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    );

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade section error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete grade section by ID
const deleteGradeSection = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeSectionsService.deleteGradeSection(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade section error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createGradeSection,
  findAllGradeSections,
  findGradeSectionById,
  findGradeSectionsBySchoolYear,
  findGradeSectionsByGradeNStrand,
  findGradeSectionsByAdviser,
  findGradeSection,
  updateGradeSection,
  deleteGradeSection,
};
