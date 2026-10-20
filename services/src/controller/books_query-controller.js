const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const booksService = require("../services/books_query-service.js");

// CREATE - Add a book
const createBook = async (req, res) => {
  try {
    const { category_id, title, isbn, publisher, publication_year, description } = req.body;

    const result = await booksService.createBook(category_id, title, isbn, publisher, publication_year, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Book created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create book error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all books
const findAllBooks = async (req, res) => {
  try {
    const result = await booksService.findAllBooks();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Books retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all books error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get book by ID
const findBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await booksService.findBookById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get book by ISBN
const findBookByIsbn = async (req, res) => {
  try {
    const { isbn } = req.params;

    const result = await booksService.findBookByIsbn(isbn);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find book by ISBN error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get books by category ID
const findBooksByCategoryId = async (req, res) => {
  try {
    const { category_id } = req.params;

    const result = await booksService.findBooksByCategoryId(category_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Books by category retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find books by category ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Search books by title
const searchBooksByTitle = async (req, res) => {
  try {
    const { title } = req.query;

    const result = await booksService.searchBooksByTitle(title);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Books searched by title successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Search books by title error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Search books by title, ISBN, or publisher
const searchBooks = async (req, res) => {
  try {
    const { keyword } = req.query;

    const result = await booksService.searchBooks(keyword);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Books searched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Search books error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update book details
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_id, title, isbn, publisher, publication_year, description } = req.body;

    const result = await booksService.updateBook(
      id,
      category_id,
      title,
      isbn,
      publisher,
      publication_year,
      description,
    );

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update book error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete book by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await booksService.deleteBook(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Book not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Book deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete book error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createBook,
  findAllBooks,
  findBookById,
  findBookByIsbn,
  findBooksByCategoryId,
  searchBooksByTitle,
  searchBooks,
  updateBook,
  deleteBook,
};
