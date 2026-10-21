// CREATE - Add a book
const CREATE_BOOK = `
  INSERT INTO books (
    category_id,
    title,
    isbn,
    publisher,
    publication_year,
    description
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all books
const FIND_ALL_BOOKS = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  ORDER BY b.id DESC
`;

// READ - Get book by ID
const FIND_BOOK_BY_ID = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  WHERE b.id = ?
`;

// READ - Get book by ISBN
const FIND_BOOK_BY_ISBN = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  WHERE b.isbn = ?
`;

// READ - Get books by category ID
const FIND_BOOKS_BY_CATEGORY_ID = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  WHERE b.category_id = ?
  ORDER BY b.title ASC
`;

// READ - Search books by title
const SEARCH_BOOKS_BY_TITLE = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  WHERE b.title LIKE ?
  ORDER BY b.title ASC
`;

// READ - Search books by title, ISBN, or publisher
const SEARCH_BOOKS = `
  SELECT
    b.id AS book_id,
    b.category_id,
    b.title,
    b.isbn,
    b.publisher,
    b.publication_year,
    b.description,
    b.created_at,
    b.updated_at
  FROM books AS b
  WHERE b.title LIKE ?
     OR b.isbn LIKE ?
     OR b.publisher LIKE ?
  ORDER BY b.title ASC
`;

// UPDATE - Update book details
const UPDATE_BOOK = `
  UPDATE books AS b
  SET
    b.category_id = ?,
    b.title = ?,
    b.isbn = ?,
    b.publisher = ?,
    b.publication_year = ?,
    b.description = ?
  WHERE b.id = ?
`;

// DELETE - Delete book by ID
const DELETE_BOOK = `
  DELETE FROM books
  WHERE id = ?
`;

module.exports = {
  CREATE_BOOK,
  FIND_ALL_BOOKS,
  FIND_BOOK_BY_ID,
  FIND_BOOK_BY_ISBN,
  FIND_BOOKS_BY_CATEGORY_ID,
  SEARCH_BOOKS_BY_TITLE,
  SEARCH_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
};
