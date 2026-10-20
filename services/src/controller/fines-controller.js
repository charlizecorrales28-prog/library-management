const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const finesService = require("../services/fines-service.js");

// CREATE - Add a fine
const createFine = async (req, res) => {
  try {
    const { borrowing_id, amount, reason, status, paid_at, remarks } = req.body;

    const result = await finesService.createFine(borrowing_id, amount, reason, status, paid_at, remarks);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Fine created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create fine error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all fines
const findAllFines = async (req, res) => {
  try {
    const result = await finesService.findAllFines();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fines retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all fines error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get fine by ID
const findFineById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await finesService.findFineById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find fine by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get fines by borrowing ID
const findFinesByBorrowingId = async (req, res) => {
  try {
    const { borrowing_id } = req.params;

    const result = await finesService.findFinesByBorrowingId(borrowing_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fines retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find fines by borrowing ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get fines by status
const findFinesByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await finesService.findFinesByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fines retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find fines by status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get unpaid fines
const findUnpaidFines = async (req, res) => {
  try {
    const result = await finesService.findUnpaidFines();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Unpaid fines retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find unpaid fines error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get total unpaid fines
const findTotalUnpaidFines = async (req, res) => {
  try {
    const result = await finesService.findTotalUnpaidFines();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Total unpaid fines retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find total unpaid fines error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE - Update fine details
const updateFine = async (req, res) => {
  try {
    const { id } = req.params;
    const { borrowing_id, amount, reason, status, paid_at, remarks } = req.body;

    const result = await finesService.updateFine(id, borrowing_id, amount, reason, status, paid_at, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update fine error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update fine status
const updateFineStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paid_at, remarks } = req.body;

    const result = await finesService.updateFineStatus(id, status, paid_at, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine status updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update fine status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Mark fine as paid
const payFine = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await finesService.payFine(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine marked as paid successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Pay fine error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Waive a fine
const waiveFine = async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;

    const result = await finesService.waiveFine(id, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine waived successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Waive fine error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete fine by ID
const deleteFine = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await finesService.deleteFine(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Fine not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fine deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete fine error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete fines by borrowing ID
const deleteFinesByBorrowingId = async (req, res) => {
  try {
    const { borrowing_id } = req.params;

    const result = await finesService.deleteFinesByBorrowingId(borrowing_id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No fines found for this borrowing record.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fines deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete fines by borrowing ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createFine,
  findAllFines,
  findFineById,
  findFinesByBorrowingId,
  findFinesByStatus,
  findUnpaidFines,
  findTotalUnpaidFines,
  updateFine,
  updateFineStatus,
  payFine,
  waiveFine,
  deleteFine,
  deleteFinesByBorrowingId,
};
