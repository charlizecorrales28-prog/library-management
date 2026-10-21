const db = require("../config/database.js");

const {
  CREATE_AUTHOR,
  FIND_ALL_AUTHORS,
  FIND_AUTHOR_BY_ID,
  FIND_AUTHOR_BY_NAME,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
} = require("../database/queries/authors-query.js");

// CREATE - Add an author
const createAuthor = async (name, bio = null) => {
  if (!name) {
    throw new Error("Author name is required.");
  }

  const [result] = await db.query(CREATE_AUTHOR, [name, bio]);

  return result;
};

// READ - Get all authors
const findAllAuthors = async () => {
  const [rows] = await db.query(FIND_ALL_AUTHORS);

  return rows;
};

// READ - Get author by ID
const findAuthorById = async (id) => {
  if (!id) {
    throw new Error("Author ID is required.");
  }

  const [rows] = await db.query(FIND_AUTHOR_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get author by name
const findAuthorByName = async (name) => {
  if (!name) {
    throw new Error("Author name is required.");
  }

  const [rows] = await db.query(FIND_AUTHOR_BY_NAME, [name]);

  return rows[0] || null;
};

// UPDATE - Update author details
const updateAuthor = async (id, name, bio = null) => {
  if (!id) {
    throw new Error("Author ID is required.");
  }

  if (!name) {
    throw new Error("Author name is required.");
  }

  const [result] = await db.query(UPDATE_AUTHOR, [name, bio, id]);

  return result;
};

// DELETE - Delete author by ID
const deleteAuthor = async (id) => {
  if (!id) {
    throw new Error("Author ID is required.");
  }

  const [result] = await db.query(DELETE_AUTHOR, [id]);

  return result;
};

module.exports = {
  createAuthor,
  findAllAuthors,
  findAuthorById,
  findAuthorByName,
  updateAuthor,
  deleteAuthor,
};
