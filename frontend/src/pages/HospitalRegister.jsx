import { useState } from "react";
import API from "../services/api";

function HospitalRegister() {
  const [formData, setFormData] =
    useState({
      hospitalName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/hospitals/register",
        formData
      );

      alert(res.data.message);

      window.location.href =
        "/hospital-login";

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
            Grow With
            <span> MedHire</span>
          </h1>

          <p>
            Discover qualified nurses,
            streamline recruitment and
            build a stronger healthcare
            workforce with India's premium
            healthcare hiring platform.
          </p>

          <div className="auth-features">

            <div className="auth-feature">
              🏥 Access Verified Nurses
            </div>

            <div className="auth-feature">
              ⚡ Faster Recruitment Process
            </div>

            <div className="auth-feature">
              📄 Resume & Certificate Access
            </div>

            <div className="auth-feature">
              📊 Smart Hiring Dashboard
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>
            Hospital Registration
          </h2>

          <p>
            Create your recruiter account
            and start hiring today.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="hospitalName"
              placeholder="Hospital Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />

            <button type="submit">
              Create Hospital Account
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default HospitalRegister;