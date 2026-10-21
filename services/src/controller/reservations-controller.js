const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const reservationsService = require("../services/reservations-service.js");

// CREATE - Add a reservation
const createReservation = async (req, res) => {
  try {
    const { student_id, book_id, status = "Pending", expires_at = null, remarks = null } = req.body;

    const result = await reservationsService.createReservation(student_id, book_id, status, expires_at, remarks);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Reservation created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all reservations
const findAllReservations = async (req, res) => {
  try {
    const result = await reservationsService.findAllReservations();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all reservations error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get reservation by ID
const findReservationById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await reservationsService.findReservationById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find reservation by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get reservations by student ID
const findReservationsByStudentId = async (req, res) => {
  try {
    const { student_id } = req.params;

    const result = await reservationsService.findReservationsByStudentId(student_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find reservations by student ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get reservations by book ID
const findReservationsByBookId = async (req, res) => {
  try {
    const { book_id } = req.params;

    const result = await reservationsService.findReservationsByBookId(book_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find reservations by book ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get reservations by status
const findReservationsByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await reservationsService.findReservationsByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find reservations by status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get pending reservations
const findPendingReservations = async (req, res) => {
  try {
    const result = await reservationsService.findPendingReservations();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Pending reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find pending reservations error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get expired pending reservations
const findExpiredReservations = async (req, res) => {
  try {
    const result = await reservationsService.findExpiredReservations();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Expired reservations retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find expired reservations error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE - Update reservation details
const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, book_id, status, expires_at, remarks } = req.body;

    const result = await reservationsService.updateReservation(id, student_id, book_id, status, expires_at, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update reservation status
const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, remarks = null } = req.body;

    const result = await reservationsService.updateReservationStatus(id, status, remarks);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation status updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update reservation status error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update reservation expiration
const updateReservationExpiration = async (req, res) => {
  try {
    const { id } = req.params;
    const { expires_at } = req.body;

    const result = await reservationsService.updateReservationExpiration(id, expires_at);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation expiration updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update reservation expiration error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Fulfill reservation
const fulfillReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await reservationsService.fulfillReservation(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation fulfilled successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Fulfill reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Cancel reservation
const cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await reservationsService.cancelReservation(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation cancelled successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Cancel reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Expire reservation
const expireReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await reservationsService.expireReservation(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation expired successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Expire reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Expire all overdue pending reservations
const expirePendingReservations = async (req, res) => {
  try {
    const result = await reservationsService.expirePendingReservations();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Overdue pending reservations expired successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Expire pending reservations error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE - Delete reservation by ID
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await reservationsService.deleteReservation(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Reservation deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete reservation error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createReservation,
  findAllReservations,
  findReservationById,
  findReservationsByStudentId,
  findReservationsByBookId,
  findReservationsByStatus,
  findPendingReservations,
  findExpiredReservations,
  updateReservation,
  updateReservationStatus,
  updateReservationExpiration,
  fulfillReservation,
  cancelReservation,
  expireReservation,
  expirePendingReservations,
  deleteReservation,
};
