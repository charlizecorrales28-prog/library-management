// CREATE
const CREATE_AUTHOR = `
  INSERT INTO authors (name, bio)
  VALUES (?, ?)
`;

// READ - Get all authors
const FIND_ALL_AUTHORS = `
  SELECT
    a.id AS author_id,
    a.name,
    a.bio,
    a.created_at,
    a.updated_at
  FROM authors AS a
  ORDER BY a.id DESC
`;

// READ - Get author by ID
const FIND_AUTHOR_BY_ID = `
  SELECT
    a.id AS author_id,
    a.name,
    a.bio,
    a.created_at,
    a.updated_at
  FROM authors AS a
  WHERE a.id = ?
`;

// READ - Get author by name
const FIND_AUTHOR_BY_NAME = `
  SELECT
    a.id AS author_id,
    a.name,
    a.bio,
    a.created_at,
    a.updated_at
  FROM authors AS a
  WHERE a.name = ?
`;

// UPDATE
const UPDATE_AUTHOR = `
  UPDATE authors AS a
  SET
    a.name = ?,
    a.bio = ?
  WHERE a.id = ?
`;

// DELETE
const DELETE_AUTHOR = `
  DELETE FROM authors
  WHERE id = ?
`;

module.exports = {
  CREATE_AUTHOR,
  FIND_ALL_AUTHORS,
  FIND_AUTHOR_BY_ID,
  FIND_AUTHOR_BY_NAME,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
};
