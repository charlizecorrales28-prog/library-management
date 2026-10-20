const db = require("../config/database.js");

const {
  CREATE_BOOK_AUTHOR,
  FIND_ALL_BOOK_AUTHORS,
  FIND_AUTHORS_BY_BOOK_ID,
  FIND_BOOKS_BY_AUTHOR_ID,
  FIND_BOOK_AUTHOR,
  DELETE_BOOK_AUTHOR,
  DELETE_AUTHORS_BY_BOOK_ID,
  DELETE_BOOKS_BY_AUTHOR_ID,
} = require("../database/queries/book_authors-query.js");

// CREATE - Assign an author to a book
const createBookAuthor = async (book_id, author_id) => {
  if (!book_id || !author_id) {
    throw new Error("Book ID and author ID are required.");
  }

  const [result] = await db.query(CREATE_BOOK_AUTHOR, [book_id, author_id]);

  return result;
};

// READ - Get all book-author relationships
const findAllBookAuthors = async () => {
  const [rows] = await db.query(FIND_ALL_BOOK_AUTHORS);

  return rows;
};

// READ - Get authors assigned to a specific book
const findAuthorsByBookId = async (book_id) => {
  if (!book_id) {
    throw new Error("Book ID is required.");
  }

  const [rows] = await db.query(FIND_AUTHORS_BY_BOOK_ID, [book_id]);

  return rows;
};

// READ - Get books assigned to a specific author
const findBooksByAuthorId = async (author_id) => {
  if (!author_id) {
    throw new Error("Author ID is required.");
  }

  const [rows] = await db.query(FIND_BOOKS_BY_AUTHOR_ID, [author_id]);

  return rows;
};

// READ - Check if an author is assigned to a book
const findBookAuthor = async (book_id, author_id) => {
  if (!book_id || !author_id) {
    throw new Error("Book ID and author ID are required.");
  }

  const [rows] = await db.query(FIND_BOOK_AUTHOR, [book_id, author_id]);

  return rows[0] || null;
};

// DELETE - Remove an author from a book
const deleteBookAuthor = async (book_id, author_id) => {
  if (!book_id || !author_id) {
    throw new Error("Book ID and author ID are required.");
  }

  const [result] = await db.query(DELETE_BOOK_AUTHOR, [book_id, author_id]);

  return result;
};

// DELETE - Remove all authors from a book
const deleteAuthorsByBookId = async (book_id) => {
  if (!book_id) {
    throw new Error("Book ID is required.");
  }

  const [result] = await db.query(DELETE_AUTHORS_BY_BOOK_ID, [book_id]);

  return result;
};

// DELETE - Remove all books from an author
const deleteBooksByAuthorId = async (author_id) => {
  if (!author_id) {
    throw new Error("Author ID is required.");
  }

  const [result] = await db.query(DELETE_BOOKS_BY_AUTHOR_ID, [author_id]);

  return result;
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
