import { useState } from "react";
import API from "../services/api";

function NurseLogin() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/nurses/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "nurseToken",
        res.data.token
      );

      alert("Login Successful");

      window.location.href =
        "/nurse-dashboard";

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-brand">

          <h1>
            Welcome Back
            <span> Nurse</span>
          </h1>

          <p>
            Access your MedHire profile,
            manage applications, upload
            documents and connect with
            top healthcare institutions
            across India.
          </p>

          <div className="auth-features">

            <div className="auth-feature">
              👩‍⚕️ Verified Hospitals
            </div>

            <div className="auth-feature">
              📨 Direct Hiring Requests
            </div>

            <div className="auth-feature">
              📄 Resume & Certificate Upload
            </div>

            <div className="auth-feature">
              🚀 Career Growth Opportunities
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>
            Nurse Login
          </h2>

          <p>
            Sign in to your MedHire account.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button type="submit">
              Access Dashboard
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default NurseLogin;