import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import NurseCard from "../components/NurseCard";

function HospitalDashboard() {
  const [nurses, setNurses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchNurses();
  }, []);

  const fetchNurses = async () => {
    try {
      const res = await API.get("/hospitals/nurses");
      setNurses(res.data.nurses);
    } catch (error) {
      console.log(error);
    }
  };

  const sendHireRequest = async (nurseId) => {
    try {
      const token =
        localStorage.getItem(
          "hospitalToken"
        );

      const res = await API.post(
        `/hire-requests/send-request/${nurseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

    } catch (error) {
      console.log(error);
      alert("Request Failed");
    }
  };

  const filteredNurses =
    nurses.filter((nurse) =>
      nurse.fullName
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <Layout>

      <div className="dashboard">

        <div className="dashboard-header">

          <h1>
            Hospital Dashboard
          </h1>

          <p>
            Manage hiring requests and
            discover qualified nurses.
          </p>

        </div>

        <div className="premium-banner">

          <div>

            <span className="premium-tag">
              Healthcare Recruitment
            </span>

            <h2>
              Find The Best Nurses Faster
            </h2>

            <p>
              Discover verified healthcare
              professionals, manage hiring
              requests and streamline your
              recruitment process.
            </p>

          </div>

          <button className="premium-btn">
            Create Hiring Campaign
          </button>

        </div>

        <div className="stats-container">

          <StatCard
            title="Total Nurses"
            value={nurses.length}
          />

          <StatCard
            title="Available Now"
            value={
              nurses.filter(
                (n) =>
                  n.availability ===
                  "Immediate"
              ).length
            }
          />

          <StatCard
            title="Resume Uploaded"
            value={
              nurses.filter(
                (n) => n.resume
              ).length
            }
          />

          <StatCard
            title="Ready To Join"
            value={
              nurses.filter(
                (n) =>
                  n.availability ===
                  "Immediate"
              ).length
            }
          />

        </div>

        <div className="search-section">

          <input
            type="text"
            placeholder="Search Nurse..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div className="quick-actions">

          <div className="action-card">
            <h3>
              👩‍⚕️ Nurses
            </h3>

            <p>
              Browse all registered
              nurses
            </p>
          </div>

          <div className="action-card">
            <h3>
              📨 Requests
            </h3>

            <p>
              Track recruitment
              requests
            </p>
          </div>

          <div className="action-card">
            <h3>
              📄 Documents
            </h3>

            <p>
              View resumes &
              certificates
            </p>
          </div>

          <div className="action-card">
            <h3>
              📊 Analytics
            </h3>

            <p>
              Monitor hiring
              performance
            </p>
          </div>

        </div>

        <div className="section-header">

          <h2>
            Available Nurses
          </h2>

          <span>
            {
              filteredNurses.length
            } Candidates Found
          </span>

        </div>

        <div className="nurse-grid">

          {filteredNurses.map(
            (nurse) => (
              <NurseCard
                key={nurse._id}
                nurse={nurse}
                sendHireRequest={
                  sendHireRequest
                }
              />
            )
          )}

        </div>

      </div>

    </Layout>
  );
}

export default HospitalDashboard;