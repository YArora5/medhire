const HireRequest = require("../models/HireRequest");

const sendHireRequest = async (req, res) => {
  try {
    const { nurseId } = req.params;

    const request = await HireRequest.create({
      hospitalId: req.user.hospitalId,
      nurseId,
    });

    res.status(201).json({
      success: true,
      message: "Hire request sent",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getNurseRequests = async (req, res) => {
  try {
    const requests = await HireRequest.find({
      nurseId: req.user.nurseId,
    })
      .populate(
        "hospitalId",
        "hospitalName email phone city"
      );

    res.status(200).json({
      success: true,
      count: requests.length,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const acceptRequest = async (req, res) => {
  try {
    const request =
      await HireRequest.findByIdAndUpdate(
        req.params.requestId,
        {
          status: "Accepted",
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message: "Request accepted",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const rejectRequest = async (req, res) => {
  try {
    const request =
      await HireRequest.findByIdAndUpdate(
        req.params.requestId,
        {
          status: "Rejected",
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message: "Request rejected",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getHospitalRequests = async (req, res) => {
  try {
    const requests = await HireRequest.find({
      hospitalId: req.user.hospitalId,
    }).populate(
      "nurseId",
      "fullName email phone specialization location"
    );

    res.status(200).json({
      success: true,
      count: requests.length,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendHireRequest,
  getNurseRequests,
  acceptRequest,
  rejectRequest,
  getHospitalRequests,
};