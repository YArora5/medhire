const HireRequest = require("../models/HireRequest");

const sendHireRequest = async (req, res) => {
  try {
    if (!req.user.hospitalId) return res.status(403).json({ success: false, message: "Hospital account required" });
    const { nurseId } = req.params;
    const Nurse = require("../models/Nurse");
    const nurse = await Nurse.findById(nurseId);
    if (!nurse || !nurse.isVisible) return res.status(404).json({ success: false, message: "Visible nurse not found" });
    const request = await HireRequest.create({ hospitalId: req.user.hospitalId, nurseId });

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
    if (!req.user.nurseId) return res.status(403).json({ success: false, message: "Nurse account required" });
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
    if (!req.user.nurseId) return res.status(403).json({ success: false, message: "Nurse account required" });
    const request = await HireRequest.findById(req.params.requestId);
    if (!request) return res.status(404).json({ success: false, message: "Request not found" });
    if (String(request.nurseId) !== String(req.user.nurseId)) return res.status(403).json({ success: false, message: "You cannot update this request" });
    request.status = "Accepted";
    await request.save();
    res.status(200).json({ success: true, message: "Request accepted", request });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const rejectRequest = async (req, res) => {
  try {
    if (!req.user.nurseId) return res.status(403).json({ success: false, message: "Nurse account required" });
    const request = await HireRequest.findById(req.params.requestId);
    if (!request) return res.status(404).json({ success: false, message: "Request not found" });
    if (String(request.nurseId) !== String(req.user.nurseId)) return res.status(403).json({ success: false, message: "You cannot update this request" });
    request.status = "Rejected";
    await request.save();
    res.status(200).json({ success: true, message: "Request rejected", request });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getHospitalRequests = async (req, res) => {
  try {
    if (!req.user.hospitalId) return res.status(403).json({ success: false, message: "Hospital account required" });
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