// CREATE - Add a category
const CREATE_CATEGORY = `
  INSERT INTO categories (
    category_name,
    description
  )
  VALUES (?, ?)
`;

// READ - Get all categories
const FIND_ALL_CATEGORIES = `
  SELECT
    c.id AS category_id,
    c.category_name,
    c.description
  FROM categories AS c
  ORDER BY c.category_name ASC
`;

// READ - Get category by ID
const FIND_CATEGORY_BY_ID = `
  SELECT
    c.id AS category_id,
    c.category_name,
    c.description
  FROM categories AS c
  WHERE c.id = ?
`;

// READ - Get category by name
const FIND_CATEGORY_BY_NAME = `
  SELECT
    c.id AS category_id,
    c.category_name,
    c.description
  FROM categories AS c
  WHERE c.category_name = ?
`;

// READ - Search categories by name
const SEARCH_CATEGORIES_BY_NAME = `
  SELECT
    c.id AS category_id,
    c.category_name,
    c.description
  FROM categories AS c
  WHERE c.category_name LIKE ?
  ORDER BY c.category_name ASC
`;

// UPDATE - Update category details
const UPDATE_CATEGORY = `
  UPDATE categories AS c
  SET
    c.category_name = ?,
    c.description = ?
  WHERE c.id = ?
`;

// UPDATE - Update category name
const UPDATE_CATEGORY_NAME = `
  UPDATE categories AS c
  SET
    c.category_name = ?
  WHERE c.id = ?
`;

// UPDATE - Update category description
const UPDATE_CATEGORY_DESCRIPTION = `
  UPDATE categories AS c
  SET
    c.description = ?
  WHERE c.id = ?
`;

// DELETE - Delete category by ID
const DELETE_CATEGORY = `
  DELETE FROM categories
  WHERE id = ?
`;

module.exports = {
  CREATE_CATEGORY,
  FIND_ALL_CATEGORIES,
  FIND_CATEGORY_BY_ID,
  FIND_CATEGORY_BY_NAME,
  SEARCH_CATEGORIES_BY_NAME,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_NAME,
  UPDATE_CATEGORY_DESCRIPTION,
  DELETE_CATEGORY,
};
