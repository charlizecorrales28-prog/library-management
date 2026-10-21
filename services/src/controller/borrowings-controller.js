const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const borrowingsService = require("../services/borrowings-service.js");

// CREATE - Record a new borrowing
const createBorrowing = async (req, res) => {
  try {
    const { student_id, book_copy_id, due_at, status, remarks } = req.body;

    const result = await borrowingsService.createBorrowing(student_id, book_copy_id, due_at, status, remarks);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Borrowing recorded successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create borrowing error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all borrowings
const findAllBorrowings = async (req, res) => {
  try {
    const result = await borrowingsService.findAllBorrowings();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowings retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all borrowings error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get borrowing by ID
const findBorrowingById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await borrowingsService.findBorrowingById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowing retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find borrowing by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get borrowings by student ID
const findBorrowingsByStudentId = async (req, res) => {
  try {
    const { student_id } = req.params;

    const result = await borrowingsService.findBorrowingsByStudentId(student_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student borrowings retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find borrowings by student ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get borrowings by book copy ID
const findBorrowingsByBookCopyId = async (req, res) => {
  try {
    const { book_copy_id } = req.params;

    const result = await borrowingsService.findBorrowingsByBookCopyId(book_copy_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book copy borrowings retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find borrowings by book copy ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get borrowings by status
const findBorrowingsByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await borrowingsService.findBorrowingsByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowings by status retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find borrowings by status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get overdue borrowings
const findOverdueBorrowings = async (req, res) => {
  try {
    const result = await borrowingsService.findOverdueBorrowings();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Overdue borrowings retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find overdue borrowings error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE - Update borrowing details
const updateBorrowing = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, book_copy_id, due_at, status, remarks } = req.body;

    const result = await borrowingsService.updateBorrowing(id, student_id, book_copy_id, due_at, status, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowing updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update borrowing error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update borrowing status
const updateBorrowingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, remarks } = req.body;

    const result = await borrowingsService.updateBorrowingStatus(id, status, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowing status updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update borrowing status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Extend borrowing due date
const updateBorrowingDueDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { due_at } = req.body;

    const result = await borrowingsService.updateBorrowingDueDate(id, due_at);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowing due date updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update borrowing due date error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Mark borrowing as returned
const returnBorrowing = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await borrowingsService.returnBorrowing(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book returned successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Return borrowing error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete borrowing by ID
const deleteBorrowing = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await borrowingsService.deleteBorrowing(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Borrowing record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Borrowing deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete borrowing error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createBorrowing,
  findAllBorrowings,
  findBorrowingById,
  findBorrowingsByStudentId,
  findBorrowingsByBookCopyId,
  findBorrowingsByStatus,
  findOverdueBorrowings,
  updateBorrowing,
  updateBorrowingStatus,
  updateBorrowingDueDate,
  returnBorrowing,
  deleteBorrowing,
};
