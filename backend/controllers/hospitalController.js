const Hospital = require("../models/Hospital");
const Nurse = require("../models/Nurse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerHospital = async (req, res) => {
  try {
    const {
      hospitalName,
      email,
      password,
      phone,
      address,
      city,
      state,
    } = req.body;

    const existingHospital =
      await Hospital.findOne({ email });

    if (existingHospital) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const hospital =
      await Hospital.create({
        hospitalName,
        email,
        password: hashedPassword,
        phone,
        address,
        city,
        state,
      });

    res.status(201).json({
      success: true,
      message: "Hospital registered successfully",
      hospital,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginHospital = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hospital =
      await Hospital.findOne({ email });

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        hospital.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        hospitalId: hospital._id,
        email: hospital.email,
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
      hospital,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getVisibleNurses = async (req, res) => {
  try {
    const nurses = await Nurse.find({
      isVisible: true,
    }).select("-password");

    res.status(200).json({
      success: true,
      count: nurses.length,
      nurses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const searchNursesByCity = async (req, res) => {
  try {
    const { city } = req.params;

    const nurses = await Nurse.find({
      isVisible: true,
      location: {
        $regex: city,
        $options: "i",
      },
    }).select("-password");

    res.status(200).json({
      success: true,
      count: nurses.length,
      nurses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const searchNursesBySpecialization = async (
  req,
  res
) => {
  try {
    const { specialization } = req.params;

    const nurses = await Nurse.find({
      isVisible: true,
      specialization: {
        $regex: specialization,
        $options: "i",
      },
    }).select("-password");

    res.status(200).json({
      success: true,
      count: nurses.length,
      nurses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerHospital,
  loginHospital,
  getVisibleNurses,
  searchNursesByCity,
  searchNursesBySpecialization,
};