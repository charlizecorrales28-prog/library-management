const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const gradeNStrandsService = require("../services/grade_n_strands-service.js");

// CREATE - Add a grade level and strand
const createGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.createGradeNStrand(grade_level, strand, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Grade level and strand created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create grade level and strand error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all grade levels and strands
const findAllGradeNStrands = async (req, res) => {
  try {
    const result = await gradeNStrandsService.findAllGradeNStrands();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade levels and strands retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all grade levels and strands error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get grade level and strand by ID
const findGradeNStrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.findGradeNStrandById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade level and strand by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get by grade level and strand
const findGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand } = req.query;

    const result = await gradeNStrandsService.findGradeNStrand(grade_level, strand);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade level and strand error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update grade level and strand details
const updateGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.updateGradeNStrand(id, grade_level, strand, description);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade level and strand error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete grade level and strand by ID
const deleteGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.deleteGradeNStrand(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade level and strand error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandById,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};
