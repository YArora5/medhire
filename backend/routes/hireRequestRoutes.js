const express = require("express");

const router = express.Router();

const {
  sendHireRequest,
  getNurseRequests,
  acceptRequest,
  rejectRequest,
  getHospitalRequests,
} = require("../controllers/hireRequestController");

const protect = require("../middleware/authMiddleware");

router.post(
  "/send-request/:nurseId",
  protect,
  sendHireRequest
);

router.get(
  "/nurse-requests",
  protect,
  getNurseRequests
);

router.put(
  "/accept/:requestId",
  protect,
  acceptRequest
);

router.put(
  "/reject/:requestId",
  protect,
  rejectRequest
);
router.get(
  "/hospital-requests",
  protect,
  getHospitalRequests
);

module.exports = router;