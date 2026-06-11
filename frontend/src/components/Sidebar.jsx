import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-header">

        <h2 className="sidebar-logo">
          Med<span>Hire</span>
        </h2>

        <p>
          Healthcare Hiring Platform
        </p>

      </div>

      <ul className="sidebar-menu">

        <li>
          <Link to="/hospital-dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/hospital-requests">
            📨 Requests
          </Link>
        </li>

        <li>
          <Link to="/assessment">
            📊 Assessment
          </Link>
        </li>

        <li>
          <Link to="#">
            📄 Documents
          </Link>
        </li>

        <li>
          <Link to="#">
            ⚙ Settings
          </Link>
        </li>

      </ul>

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem(
              "hospitalToken"
            );

            window.location.href =
              "/hospital-login";
          }}
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;