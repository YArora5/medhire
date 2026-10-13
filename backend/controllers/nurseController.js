const Nurse = require("../models/Nurse");

const sanitizeNurse = (nurse) => {
  if (!nurse) return nurse;
  const safe = nurse.toObject ? nurse.toObject() : { ...nurse };
  delete safe.password;
  return safe;
};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerNurse = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phone,
      qualification,
      experience,
      specialization,
      location,
    } = req.body;

    const existingNurse = await Nurse.findOne({ email });

    if (existingNurse) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nurse = await Nurse.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      qualification,
      experience,
      specialization,
      location,
    });

    res.status(201).json({
      success: true,
      message: "Nurse registered successfully",
      nurse: sanitizeNurse(nurse),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginNurse = async (req, res) => {
  try {
    const { email, password } = req.body;

    const nurse = await Nurse.findOne({ email });

    if (!nurse) {
      return res.status(404).json({
        success: false,
        message: "Nurse not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      nurse.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        nurseId: nurse._id,
        email: nurse.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      nurse: sanitizeNurse(nurse),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const nurse = await Nurse.findById(
      req.user.nurseId
    ).select("-password");

    res.status(200).json({
      success: true,
      nurse: sanitizeNurse(nurse),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const allowedFields = [
      "fullName",
      "phone",
      "qualification",
      "experience",
      "specialization",
      "location",
    ];
    const updates = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    }

    const nurse = await Nurse.findByIdAndUpdate(
      req.user.nurseId,
      updates,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      nurse: sanitizeNurse(nurse),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const uploadDocuments = async (req, res) => {
  try {
    const nurse = await Nurse.findById(
      req.user.nurseId
    );

    if (req.files.resume) {
      nurse.resume =
        req.files.resume[0].filename;
    }

    if (req.files.certificate) {
      nurse.certificate =
        req.files.certificate[0].filename;
    }

    if (req.files.profilePhoto) {
      nurse.profilePhoto =
        req.files.profilePhoto[0].filename;
    }

    if (req.files.videoCV) {
      nurse.videoCV =
        req.files.videoCV[0].filename;
    }

    await nurse.save();

    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      nurse: sanitizeNurse(nurse),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const toggleVisibility = async (req, res) => {
  try {
    const nurse = await Nurse.findById(
      req.user.nurseId
    );

    nurse.isVisible = !nurse.isVisible;

    await nurse.save();

    res.status(200).json({
      success: true,
      isVisible: nurse.isVisible,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerNurse,
  loginNurse,
  getProfile,
  updateProfile,
  uploadDocuments,
  toggleVisibility,
};