const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const categoriesService = require("../services/categories-service.js");

// CREATE - Add a category
const createCategory = async (req, res) => {
  try {
    const { category_name, description } = req.body;

    const result = await categoriesService.createCategory(category_name, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Category created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create category error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all categories
const findAllCategories = async (req, res) => {
  try {
    const result = await categoriesService.findAllCategories();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Categories retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all categories error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get category by ID
const findCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await categoriesService.findCategoryById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find category by ID error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get category by name
const findCategoryByName = async (req, res) => {
  try {
    const { category_name } = req.params;

    const result = await categoriesService.findCategoryByName(category_name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find category by name error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Search categories by name
const searchCategoriesByName = async (req, res) => {
  try {
    const { category_name } = req.query;

    const result = await categoriesService.searchCategoriesByName(category_name);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Categories searched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Search categories by name error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update category details
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name, description } = req.body;

    const result = await categoriesService.updateCategory(id, category_name, description);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update category error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update category name
const updateCategoryName = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name } = req.body;

    const result = await categoriesService.updateCategoryName(id, category_name);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category name updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update category name error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update category description
const updateCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const result = await categoriesService.updateCategoryDescription(id, description);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category description updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update category description error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete category by ID
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await categoriesService.deleteCategory(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Category deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete category error:", error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
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
