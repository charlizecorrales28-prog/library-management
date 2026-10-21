const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const accountsService = require("../services/accounts-service.js");

// CREATE - Add an account
const createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await accountsService.createAccount(username, password);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Account created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create account error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all accounts
const findAllAccounts = async (req, res) => {
  try {
    const result = await accountsService.findAllAccounts();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Accounts retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all accounts error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get account by ID
const findAccountById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await accountsService.findAccountById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find account by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get account by username
const findAccountByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await accountsService.findAccountByUsername(username);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find account by username error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update account details
const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const result = await accountsService.updateAccount(id, username, password);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update account error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete account by ID
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await accountsService.deleteAccount(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete account error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createAccount,
  findAllAccounts,
  findAccountById,
  findAccountByUsername,
  updateAccount,
  deleteAccount,
};
