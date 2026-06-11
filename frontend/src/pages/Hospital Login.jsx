import { useState } from "react";
import API from "../services/api";

function HospitalLogin() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/hospitals/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "hospitalToken",
        res.data.token
      );

      alert("Login Successful");

      window.location.href =
        "/hospital-dashboard";

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
            <span> Hospital</span>
          </h1>

          <p>
            Access your recruitment
            dashboard, discover skilled
            nurses and manage hiring
            requests from one premium
            platform.
          </p>

          <div className="auth-features">

            <div className="auth-feature">
              🏥 Manage Recruitment
            </div>

            <div className="auth-feature">
              👩‍⚕️ Access Verified Nurses
            </div>

            <div className="auth-feature">
              📄 View Resumes & Documents
            </div>

            <div className="auth-feature">
              ⚡ Faster Hiring Workflow
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>
            Hospital Login
          </h2>

          <p>
            Sign in to your recruiter
            account.
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

export default HospitalLogin;