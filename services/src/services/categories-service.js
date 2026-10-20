const db = require("../config/database.js");

const {
  CREATE_CATEGORY,
  FIND_ALL_CATEGORIES,
  FIND_CATEGORY_BY_ID,
  FIND_CATEGORY_BY_NAME,
  SEARCH_CATEGORIES_BY_NAME,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_NAME,
  UPDATE_CATEGORY_DESCRIPTION,
  DELETE_CATEGORY,
} = require("../database/queries/categories-query.js");

// CREATE - Add a category
const createCategory = async (category_name, description) => {
  if (!category_name) {
    throw new Error("Category name is required.");
  }

  const [result] = await db.query(CREATE_CATEGORY, [category_name, description]);

  return result;
};

// READ - Get all categories
const findAllCategories = async () => {
  const [rows] = await db.query(FIND_ALL_CATEGORIES);

  return rows;
};

// READ - Get category by ID
const findCategoryById = async (id) => {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  const [rows] = await db.query(FIND_CATEGORY_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get category by name
const findCategoryByName = async (category_name) => {
  if (!category_name) {
    throw new Error("Category name is required.");
  }

  const [rows] = await db.query(FIND_CATEGORY_BY_NAME, [category_name]);

  return rows[0] || null;
};

// READ - Search categories by name
const searchCategoriesByName = async (category_name) => {
  if (!category_name) {
    throw new Error("Category name is required.");
  }

  const [rows] = await db.query(SEARCH_CATEGORIES_BY_NAME, [`%${category_name}%`]);

  return rows;
};

// UPDATE - Update category details
const updateCategory = async (id, category_name, description) => {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  if (!category_name) {
    throw new Error("Category name is required.");
  }

  const [result] = await db.query(UPDATE_CATEGORY, [category_name, description, id]);

  return result;
};

// UPDATE - Update category name
const updateCategoryName = async (id, category_name) => {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  if (!category_name) {
    throw new Error("Category name is required.");
  }

  const [result] = await db.query(UPDATE_CATEGORY_NAME, [category_name, id]);

  return result;
};

// UPDATE - Update category description
const updateCategoryDescription = async (id, description) => {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  if (description === undefined) {
    throw new Error("Category description is required.");
  }

  const [result] = await db.query(UPDATE_CATEGORY_DESCRIPTION, [description, id]);

  return result;
};

// DELETE - Delete category by ID
const deleteCategory = async (id) => {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  const [result] = await db.query(DELETE_CATEGORY, [id]);

  return result;
};

module.exports = {
  createCategory,
  findAllCategories,
  findCategoryById,
  findCategoryByName,
  searchCategoriesByName,
  updateCategory,
  updateCategoryName,
  updateCategoryDescription,
  deleteCategory,
};
