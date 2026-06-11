function NurseCard({
  nurse,
  sendHireRequest,
}) {
  return (
    <div className="nurse-card">

      {nurse.profilePhoto ? (
        <img
          src={`http://localhost:5000/uploads/${nurse.profilePhoto}`}
          alt="Profile"
          className="nurse-image"
        />
      ) : (
        <div className="avatar">
          {nurse.fullName?.charAt(0)}
        </div>
      )}

      <h3>{nurse.fullName}</h3>

      <p>
        <strong>Qualification:</strong>{" "}
        {nurse.qualification}
      </p>

      <p>
        <strong>Specialization:</strong>{" "}
        {nurse.specialization}
      </p>

      <p>
        <strong>Experience:</strong>{" "}
        {nurse.experience}
      </p>

      <p>
        <strong>Location:</strong>{" "}
        {nurse.location}
      </p>

      <p>
        <strong>Availability:</strong>

        <span
          style={{
            marginLeft: "10px",
            background:
              nurse.availability ===
              "Immediate"
                ? "#16a34a"
                : "#f59e0b",
            color: "#fff",
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {nurse.availability}
        </span>
      </p>

      <p>
        <strong>Salary:</strong> ₹
        {nurse.salaryExpectation}
      </p>

      <div className="links">

        {nurse.resume && (
          <a
            href={`http://localhost:5000/uploads/${nurse.resume}`}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        )}

        {nurse.certificate && (
          <a
            href={`http://localhost:5000/uploads/${nurse.certificate}`}
            target="_blank"
            rel="noreferrer"
          >
            Certificate
          </a>
        )}

      </div>

      <button
        className="hire-btn"
        onClick={() =>
          sendHireRequest(
            nurse._id
          )
        }
      >
        Hire Nurse
      </button>

    </div>
  );
}

export default NurseCard;