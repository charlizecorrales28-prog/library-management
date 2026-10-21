const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const bookAuthorsService = require("../services/book_authors-service.js");

// CREATE - Assign an author to a book
const createBookAuthor = async (req, res) => {
  try {
    const { book_id, author_id } = req.body;

    const result = await bookAuthorsService.createBookAuthor(book_id, author_id);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Author assigned to book successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create book author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all book-author relationships
const findAllBookAuthors = async (req, res) => {
  try {
    const result = await bookAuthorsService.findAllBookAuthors();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book-author relationships retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all book authors error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get authors assigned to a specific book
const findAuthorsByBookId = async (req, res) => {
  try {
    const { book_id } = req.params;

    const result = await bookAuthorsService.findAuthorsByBookId(book_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Authors for the book retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find authors by book ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get books assigned to a specific author
const findBooksByAuthorId = async (req, res) => {
  try {
    const { author_id } = req.params;

    const result = await bookAuthorsService.findBooksByAuthorId(author_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Books by author retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find books by author ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Check if an author is assigned to a book
const findBookAuthor = async (req, res) => {
  try {
    const { book_id, author_id } = req.params;

    const result = await bookAuthorsService.findBookAuthor(book_id, author_id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book-author relationship not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book-author relationship retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Remove an author from a book
const deleteBookAuthor = async (req, res) => {
  try {
    const { book_id, author_id } = req.params;

    const result = await bookAuthorsService.deleteBookAuthor(book_id, author_id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book-author relationship not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Author removed from book successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete book author error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Remove all authors from a book
const deleteAuthorsByBookId = async (req, res) => {
  try {
    const { book_id } = req.params;

    const result = await bookAuthorsService.deleteAuthorsByBookId(book_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "All authors removed from book successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete authors by book ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Remove all books from an author
const deleteBooksByAuthorId = async (req, res) => {
  try {
    const { author_id } = req.params;

    const result = await bookAuthorsService.deleteBooksByAuthorId(author_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "All books removed from author successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete books by author ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createBookAuthor,
  findAllBookAuthors,
  findAuthorsByBookId,
  findBooksByAuthorId,
  findBookAuthor,
  deleteBookAuthor,
  deleteAuthorsByBookId,
  deleteBooksByAuthorId,
};
