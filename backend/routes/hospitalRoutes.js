const express = require("express");

const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  registerHospital,
  loginHospital,
  getVisibleNurses,
  searchNursesByCity,
  searchNursesBySpecialization,
} = require("../controllers/hospitalController");

router.post("/register", registerHospital);

router.post("/login", loginHospital);

router.get("/nurses", protect, getVisibleNurses);

router.get(
  "/nurses/city/:city",
  protect,
  searchNursesByCity
);

router.get(
  "/nurses/specialization/:specialization",
  protect,
  searchNursesBySpecialization
);

module.exports = router;