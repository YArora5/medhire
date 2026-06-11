import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";

function NurseDashboard() {
const [requests, setRequests] = useState([]);
const [availability, setAvailability] =
useState("Immediate");
const [salaryExpectation, setSalaryExpectation] =
useState("");

const [resume, setResume] = useState(null);
const [certificate, setCertificate] =
useState(null);
const [profilePhoto, setProfilePhoto] =
useState(null);
const [videoCV, setVideoCV] = useState(null);

useEffect(() => {
fetchRequests();
}, []);

const fetchRequests = async () => {
try {
const token =
localStorage.getItem("nurseToken");


  const res = await API.get(
    "/hire-requests/nurse-requests",
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

const updateProfile = async () => {
try {
const token =
localStorage.getItem("nurseToken");


  await API.put(
    "/nurses/profile",
    {
      availability,
      salaryExpectation,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert("Profile Updated");
} catch (error) {
  console.log(error);
}


};

const uploadFiles = async () => {
try {
const token =
localStorage.getItem("nurseToken");


  const formData = new FormData();

  if (resume)
    formData.append("resume", resume);

  if (certificate)
    formData.append(
      "certificate",
      certificate
    );

  if (profilePhoto)
    formData.append(
      "profilePhoto",
      profilePhoto
    );

  if (videoCV)
    formData.append(
      "videoCV",
      videoCV
    );

  const res = await API.post(
    "/nurses/upload-documents",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  alert(res.data.message);
} catch (error) {
  console.log(error);
  alert("Upload Failed");
}


};

const acceptRequest = async (id) => {
try {
const token =
localStorage.getItem("nurseToken");


  await API.put(
    `/hire-requests/accept/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert("Request Accepted");
  fetchRequests();
} catch (error) {
  console.log(error);
}


};

const rejectRequest = async (id) => {
try {
const token =
localStorage.getItem("nurseToken");


  await API.put(
    `/hire-requests/reject/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert("Request Rejected");
  fetchRequests();
} catch (error) {
  console.log(error);
}


};

return (
  <Layout>

    <div className="dashboard">

      <div className="dashboard-header">

        <span className="topbar-tag">
          Nurse Career Hub
        </span>

        <h1>
          Nurse Dashboard
        </h1>

        <p>
          Manage profile, upload documents,
          receive hiring requests and grow
          your healthcare career.
        </p>

      </div>

      <div className="stats-container">

        <StatCard
          title="Total Requests"
          value={requests.length}
        />

        <StatCard
          title="Accepted"
          value={
            requests.filter(
              (r) =>
                r.status === "Accepted"
            ).length
          }
        />

        <StatCard
          title="Pending"
          value={
            requests.filter(
              (r) =>
                r.status === "Pending"
            ).length
          }
        />

      </div>

      <div className="quick-actions">

        <div className="action-card">
          📄 Resume Upload
        </div>

        <div className="action-card">
          🎓 Certificates
        </div>

        <div className="action-card">
          🎥 Video CV
        </div>

        <div className="action-card">
          📊 Assessment
        </div>

      </div>

      <div className="dashboard-card">

        <h2>
          Profile Settings
        </h2>

        <select
          value={availability}
          onChange={(e) =>
            setAvailability(
              e.target.value
            )
          }
        >
          <option>Immediate</option>
          <option>1 Month</option>
          <option>2 Months</option>
          <option>3 Months</option>
        </select>

        <input
          type="text"
          placeholder="Salary Expectation"
          value={salaryExpectation}
          onChange={(e) =>
            setSalaryExpectation(
              e.target.value
            )
          }
        />

        <button
          className="hire-btn"
          onClick={updateProfile}
        >
          Save Profile
        </button>

      </div>

      <div className="dashboard-card">

        <h2>
          Upload Documents
        </h2>

        <input
          type="file"
          onChange={(e) =>
            setResume(
              e.target.files[0]
            )
          }
        />

        <input
          type="file"
          onChange={(e) =>
            setCertificate(
              e.target.files[0]
            )
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setProfilePhoto(
              e.target.files[0]
            )
          }
        />

        <input
          type="file"
          accept="video/*"
          onChange={(e) =>
            setVideoCV(
              e.target.files[0]
            )
          }
        />

        <button
          className="hire-btn"
          onClick={uploadFiles}
        >
          Upload Files
        </button>

      </div>

      <div className="section-header">

        <h2>
          Recruitment Requests
        </h2>

        <span>
          {requests.length} Active
        </span>

      </div>

      <div className="nurse-grid">

        {requests.map((req) => (

          <div
            key={req._id}
            className="nurse-card"
          >

            <h3>
              {
                req.hospitalId
                  ?.hospitalName
              }
            </h3>

            <p>
              📍 {
                req.hospitalId
                  ?.city
              }
            </p>

            <p>

              Status

              <span
                style={{
                  marginLeft: "10px",
                  padding:
                    "5px 12px",
                  borderRadius:
                    "20px",
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

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >

              <button
                className="hire-btn"
                onClick={() =>
                  acceptRequest(
                    req._id
                  )
                }
              >
                Accept
              </button>

              <button
                className="hire-btn"
                onClick={() =>
                  rejectRequest(
                    req._id
                  )
                }
              >
                Reject
              </button>

            </div>

            <button
              className="hire-btn"
              style={{
                marginTop: "15px",
              }}
              onClick={() =>
                (
                  window.location.href =
                  "/assessment"
                )
              }
            >
              Start Assessment
            </button>

          </div>

        ))}

      </div>

    </div>

  </Layout>
);
}
export default NurseDashboard;
