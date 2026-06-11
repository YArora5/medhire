import { useState } from "react";
import API from "../services/api";

function NurseRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    qualification: "",
    experience: "",
    specialization: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/nurses/register",
        formData
      );

      alert(res.data.message);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        qualification: "",
        experience: "",
        specialization: "",
        location: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-brand">

          <h1>
            Join <span>MedHire</span>
          </h1>

          <p>
            Connect with top hospitals,
            upload your credentials,
            receive direct hiring requests
            and grow your healthcare career.
          </p>

          <div className="auth-features">

            <div className="auth-feature">
              ✅ Verified Hospitals
            </div>

            <div className="auth-feature">
              ✅ Direct Recruitment Requests
            </div>

            <div className="auth-feature">
              ✅ Resume & Certificate Upload
            </div>

            <div className="auth-feature">
              ✅ Assessment Based Hiring
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Nurse Registration</h2>

          <p>
            Create your professional
            healthcare profile.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleChange}
            />

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
            />

            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />

            <button type="submit">
              Create Account
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default NurseRegister;