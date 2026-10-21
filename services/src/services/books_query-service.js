const db = require("../config/database.js");

const {
  CREATE_BOOK,
  FIND_ALL_BOOKS,
  FIND_BOOK_BY_ID,
  FIND_BOOK_BY_ISBN,
  FIND_BOOKS_BY_CATEGORY_ID,
  SEARCH_BOOKS_BY_TITLE,
  SEARCH_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
} = require("../database/queries/books-query.js");

// CREATE - Add a book
const createBook = async (category_id, title, isbn, publisher, publication_year, description) => {
  if (!category_id || !title) {
    throw new Error("Category ID and book title are required.");
  }

  const [result] = await db.query(CREATE_BOOK, [category_id, title, isbn, publisher, publication_year, description]);

  return result;
};

// READ - Get all books
const findAllBooks = async () => {
  const [rows] = await db.query(FIND_ALL_BOOKS);

  return rows;
};

// READ - Get book by ID
const findBookById = async (id) => {
  if (!id) {
    throw new Error("Book ID is required.");
  }

  const [rows] = await db.query(FIND_BOOK_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get book by ISBN
const findBookByIsbn = async (isbn) => {
  if (!isbn) {
    throw new Error("ISBN is required.");
  }

  const [rows] = await db.query(FIND_BOOK_BY_ISBN, [isbn]);

  return rows[0] || null;
};

// READ - Get books by category ID
const findBooksByCategoryId = async (category_id) => {
  if (!category_id) {
    throw new Error("Category ID is required.");
  }

  const [rows] = await db.query(FIND_BOOKS_BY_CATEGORY_ID, [category_id]);

  return rows;
};

// READ - Search books by title
const searchBooksByTitle = async (title) => {
  if (!title) {
    throw new Error("Book title is required.");
  }

  const [rows] = await db.query(SEARCH_BOOKS_BY_TITLE, [`%${title}%`]);

  return rows;
};

// READ - Search books by title, ISBN, or publisher
const searchBooks = async (keyword) => {
  if (!keyword) {
    throw new Error("Search keyword is required.");
  }

  const searchTerm = `%${keyword}%`;

  const [rows] = await db.query(SEARCH_BOOKS, [searchTerm, searchTerm, searchTerm]);

  return rows;
};

// UPDATE - Update book details
const updateBook = async (id, category_id, title, isbn, publisher, publication_year, description) => {
  if (!id) {
    throw new Error("Book ID is required.");
  }

  if (!category_id || !title) {
    throw new Error("Category ID and book title are required.");
  }

  const [result] = await db.query(UPDATE_BOOK, [
    category_id,
    title,
    isbn,
    publisher,
    publication_year,
    description,
    id,
  ]);

  return result;
};

// DELETE - Delete book by ID
const deleteBook = async (id) => {
  if (!id) {
    throw new Error("Book ID is required.");
  }

  const [result] = await db.query(DELETE_BOOK, [id]);

  return result;
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
