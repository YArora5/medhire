const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    specialization: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    assessmentScore: {
      type: Number,
      default: 0,
    },

    isVisible: {
      type: Boolean,
      default: false,
    },

    resume: {
  type: String,
  default: "",
},

certificate: {
  type: String,
  default: "",
},
availability: {
  type: String,
  default: "Available",
},

salaryExpectation: {
  type: String,
  default: "",
},

profilePhoto: {
  type: String,
  default: "",
},

videoCV: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Nurse", nurseSchema);