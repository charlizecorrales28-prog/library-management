const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const bookCopiesService = require("../services/book_copies-service.js");

// CREATE - Add a book copy
const createBookCopy = async (req, res) => {
  try {
    const { book_id, accession_number, barcode, status, condition_status, acquired_at } = req.body;

    const result = await bookCopiesService.createBookCopy(
      book_id,
      accession_number,
      barcode,
      status,
      condition_status,
      acquired_at,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Book copy created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create book copy error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all book copies
const findAllBookCopies = async (req, res) => {
  try {
    const result = await bookCopiesService.findAllBookCopies();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copies retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all book copies error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get book copy by ID
const findBookCopyById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await bookCopiesService.findBookCopyById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book copy by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get book copies by book ID
const findBookCopiesByBookId = async (req, res) => {
  try {
    const { book_id } = req.params;

    const result = await bookCopiesService.findBookCopiesByBookId(book_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copies retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book copies by book ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get book copy by accession number
const findBookCopyByAccessionNumber = async (req, res) => {
  try {
    const { accession_number } = req.params;

    const result = await bookCopiesService.findBookCopyByAccessionNumber(accession_number);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book copy by accession number error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get book copy by barcode
const findBookCopyByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;

    const result = await bookCopiesService.findBookCopyByBarcode(barcode);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book copy by barcode error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get book copies by status
const findBookCopiesByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await bookCopiesService.findBookCopiesByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copies by status retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book copies by status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update book copy details
const updateBookCopy = async (req, res) => {
  try {
    const { id } = req.params;
    const { book_id, accession_number, barcode, status, condition_status, acquired_at } = req.body;

    const result = await bookCopiesService.updateBookCopy(
      id,
      book_id,
      accession_number,
      barcode,
      status,
      condition_status,
      acquired_at,
    );

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update book copy error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update book copy status
const updateBookCopyStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await bookCopiesService.updateBookCopyStatus(id, status);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy status updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update book copy status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update book copy condition
const updateBookCopyCondition = async (req, res) => {
  try {
    const { id } = req.params;
    const { condition_status } = req.body;

    const result = await bookCopiesService.updateBookCopyCondition(id, condition_status);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy condition updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update book copy condition error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete book copy by ID
const deleteBookCopy = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await bookCopiesService.deleteBookCopy(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book copy not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete book copy error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete all copies of a book
const deleteBookCopiesByBookId = async (req, res) => {
  try {
    const { book_id } = req.params;

    const result = await bookCopiesService.deleteBookCopiesByBookId(book_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copies deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete book copies by book ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createBookCopy,
  findAllBookCopies,
  findBookCopyById,
  findBookCopiesByBookId,
  findBookCopyByAccessionNumber,
  findBookCopyByBarcode,
  findBookCopiesByStatus,
  updateBookCopy,
  updateBookCopyStatus,
  updateBookCopyCondition,
  deleteBookCopy,
  deleteBookCopiesByBookId,
};
