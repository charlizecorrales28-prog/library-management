const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const authorsService = require("../services/authors-service.js");

// CREATE - Add an author
const createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;

    const result = await authorsService.createAuthor(name, bio);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Author created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all authors
const findAllAuthors = async (req, res) => {
  try {
    const result = await authorsService.findAllAuthors();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Authors retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all authors error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get author by ID
const findAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await authorsService.findAuthorById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Author not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Author retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find author by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get author by name
const findAuthorByName = async (req, res) => {
  try {
    const { name } = req.params;

    const result = await authorsService.findAuthorByName(name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Author not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Author retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find author by name error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update author details
const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio } = req.body;

    const result = await authorsService.updateAuthor(id, name, bio);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Author not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Author updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete author by ID
const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await authorsService.deleteAuthor(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Author not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Author deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createAuthor,
  findAllAuthors,
  findAuthorById,
  findAuthorByName,
  updateAuthor,
  deleteAuthor,
};
