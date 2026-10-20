// CREATE - Assign an author to a book
const CREATE_BOOK_AUTHOR = `
  INSERT INTO book_authors (book_id, author_id)
  VALUES (?, ?)
`;

// READ - Get all book-author relationships
const FIND_ALL_BOOK_AUTHORS = `
  SELECT
    ba.book_id,
    ba.author_id
  FROM book_authors AS ba
  ORDER BY ba.book_id DESC
`;

// READ - Get authors assigned to a specific book
const FIND_AUTHORS_BY_BOOK_ID = `
  SELECT
    ba.book_id,
    a.id AS author_id,
    a.name,
    a.bio
  FROM book_authors AS ba
  INNER JOIN authors AS a
    ON ba.author_id = a.id
  WHERE ba.book_id = ?
  ORDER BY a.name ASC
`;

// READ - Get books assigned to a specific author
const FIND_BOOKS_BY_AUTHOR_ID = `
  SELECT
    ba.author_id,
    b.id AS book_id,
    b.title
  FROM book_authors AS ba
  INNER JOIN books AS b
    ON ba.book_id = b.id
  WHERE ba.author_id = ?
  ORDER BY b.title ASC
`;

// READ - Check if an author is assigned to a book
const FIND_BOOK_AUTHOR = `
  SELECT
    ba.book_id,
    ba.author_id
  FROM book_authors AS ba
  WHERE ba.book_id = ?
    AND ba.author_id = ?
`;

// DELETE - Remove an author from a book
const DELETE_BOOK_AUTHOR = `
  DELETE FROM book_authors
  WHERE book_id = ?
    AND author_id = ?
`;

// DELETE - Remove all authors from a book
const DELETE_AUTHORS_BY_BOOK_ID = `
  DELETE FROM book_authors
  WHERE book_id = ?
`;

// DELETE - Remove all books from an author
const DELETE_BOOKS_BY_AUTHOR_ID = `
  DELETE FROM book_authors
  WHERE author_id = ?
`;

module.exports = {
  CREATE_BOOK_AUTHOR,
  FIND_ALL_BOOK_AUTHORS,
  FIND_AUTHORS_BY_BOOK_ID,
  FIND_BOOKS_BY_AUTHOR_ID,
  FIND_BOOK_AUTHOR,
  DELETE_BOOK_AUTHOR,
  DELETE_AUTHORS_BY_BOOK_ID,
  DELETE_BOOKS_BY_AUTHOR_ID,
};
