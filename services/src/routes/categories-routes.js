const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const categoriesController = require("../controller/categories-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", categoriesController.createCategory);
router.get("/", categoriesController.findAllCategories);
router.get("/:id", categoriesController.findCategoryById);
router.get("/:category_name", categoriesController.findCategoryByName);
router.get("/:category_name", categoriesController.searchCategoriesByName);
router.put("/:id", categoriesController.updateCategory);
router.put("/:id", categoriesController.updateCategoryName);
router.put("/:id", categoriesController.updateCategoryDescription);
router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;
