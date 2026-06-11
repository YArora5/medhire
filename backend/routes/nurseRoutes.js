const express = require("express");

const router = express.Router();

const {
  registerNurse,
  loginNurse,
  getProfile,
  updateProfile,
  uploadDocuments,
  toggleVisibility,
} = require("../controllers/nurseController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/register", registerNurse);

router.post("/login", loginNurse);

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put(
  "/toggle-visibility",
  protect,
  toggleVisibility
);

router.post(
  "/upload-documents",
  protect,
  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "certificate",
      maxCount: 1,
    },
    {
      name: "profilePhoto",
      maxCount: 1,
    },
    {
      name: "videoCV",
      maxCount: 1,
    },
  ]),
  uploadDocuments
);

module.exports = router;