const express = require("express");

const router = express.Router();

const {
  registerHospital,
  loginHospital,
  getVisibleNurses,
  searchNursesByCity,
  searchNursesBySpecialization,
} = require("../controllers/hospitalController");

router.post("/register", registerHospital);

router.post("/login", loginHospital);

router.get("/nurses", getVisibleNurses);

router.get(
  "/nurses/city/:city",
  searchNursesByCity
);

router.get(
  "/nurses/specialization/:specialization",
  searchNursesBySpecialization
);

module.exports = router;