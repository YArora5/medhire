const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const allowedMimeTypes = new Set(["application/pdf", "image/jpeg", "image/png", "video/mp4"]);
const allowedExtensions = new Set([".pdf", ".jpg", ".jpeg", ".png", ".mp4"]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, "uploads/"); },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${crypto.randomBytes(8).toString("hex")}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024, files: 4 },
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    if (allowedMimeTypes.has(file.mimetype) && allowedExtensions.has(extension)) return cb(null, true);
    cb(new Error("Unsupported file type. Upload PDF, JPG, PNG, or MP4 files only."));
  },
});

module.exports = upload;
