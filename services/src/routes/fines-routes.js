const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const finesController = require("../controller/fines-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", finesController.createFine);
router.get("/", finesController.findAllFines);
router.get("/:id", finesController.findFineById);
router.get("/:borrowing_id", finesController.findFinesByBorrowingId);
router.get("/:status", finesController.findFinesByStatus);
router.get("/", finesController.findUnpaidFines);
router.get("/", finesController.findTotalUnpaidFines);
router.put("/:id", finesController.updateFine);
router.put("/:id", finesController.updateFineStatus);
router.get("/:id", finesController.payFine);
router.get("/:id", finesController.waiveFine);
router.delete("/:id", finesController.deleteFine);
router.delete("/:borrowing_id", finesController.deleteFinesByBorrowingId);

module.exports = router;
                