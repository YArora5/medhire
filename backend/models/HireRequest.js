const mongoose = require("mongoose");

const hireRequestSchema = new mongoose.Schema(
  {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },

    nurseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse",
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "HireRequest",
  hireRequestSchema
);