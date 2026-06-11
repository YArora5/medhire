import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function HospitalRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token =
        localStorage.getItem(
          "hospitalToken"
        );

      const res = await API.get(
        "/hire-requests/hospital-requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(res.data.requests);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>

      <div className="dashboard">

        <div className="dashboard-header">

          <span className="topbar-tag">
            Recruitment Management
          </span>

          <h1>
            Hospital Requests
          </h1>

          <p>
            Track all hiring requests sent
            to nurses across the platform.
          </p>

        </div>

        <div className="stats-container">

          <div className="stat-box">
            <h2>
              {requests.length}
            </h2>

            <span>
              Total Requests
            </span>
          </div>

          <div className="stat-box">
            <h2>
              {
                requests.filter(
                  (r) =>
                    r.status ===
                    "Accepted"
                ).length
              }
            </h2>

            <span>
              Accepted
            </span>
          </div>

          <div className="stat-box">
            <h2>
              {
                requests.filter(
                  (r) =>
                    r.status ===
                    "Pending"
                ).length
              }
            </h2>

            <span>
              Pending
            </span>
          </div>

        </div>

        <div className="nurse-grid">

          {requests.map((req) => (

            <div
              key={req._id}
              className="nurse-card"
            >

              <div className="avatar">
                {
                  req.nurseId
                    ?.fullName
                    ?.charAt(0)
                }
              </div>

              <h3>
                {
                  req.nurseId
                    ?.fullName
                }
              </h3>

              <p>
                📧 {
                  req.nurseId?.email
                }
              </p>

              <p>
                📞 {
                  req.nurseId?.phone
                }
              </p>

              <p>
                🩺 {
                  req.nurseId
                    ?.specialization
                }
              </p>

              <p>
                📍 {
                  req.nurseId
                    ?.location
                }
              </p>

              <p>

                Status

                <span
                  style={{
                    marginLeft:
                      "10px",
                    padding:
                      "5px 12px",
                    borderRadius:
                      "20px",
                    color:
                      "white",
                    background:
                      req.status ===
                      "Accepted"
                        ? "#16a34a"
                        : req.status ===
                          "Rejected"
                        ? "#dc2626"
                        : "#f59e0b",
                  }}
                >
                  {req.status}
                </span>

              </p>

            </div>

          ))}

        </div>

      </div>

    </Layout>
  );
}

export default HospitalRequests;