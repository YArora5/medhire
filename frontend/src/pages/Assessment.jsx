import Layout from "../components/Layout";

function Assessment() {
  return (
    <Layout>

      <div className="dashboard">

        <div className="dashboard-header">

          <span className="topbar-tag">
            AI Assessment Engine
          </span>

          <h1>
            Assessment Portal
          </h1>

          <p>
            Smart nurse evaluation system
            powered by clinical skill analysis
            and hospital verified assessments.
          </p>

        </div>

        <div className="assessment-hero">

          <h2>
            AI Powered Healthcare Assessment
          </h2>

          <p>
            Evaluate nursing professionals
            through clinical knowledge tests,
            skill verification, AI scoring
            and certification modules.
          </p>

        </div>

        <div className="quick-actions">

          <div className="action-card">
            🧠 Clinical Knowledge
          </div>

          <div className="action-card">
            🩺 Nursing Skills
          </div>

          <div className="action-card">
            🤖 AI Scoring
          </div>

          <div className="action-card">
            📜 Certification
          </div>

        </div>

        <div className="dashboard-card">

          <h2>
            Upcoming Features
          </h2>

          <p>
            ✅ Clinical Knowledge Test
          </p>

          <p>
            ✅ Nursing Skill Assessment
          </p>

          <p>
            ✅ AI Score Generation
          </p>

          <p>
            ✅ Hospital Verification
          </p>

          <p>
            ✅ Digital Certification
          </p>

        </div>

      </div>

    </Layout>
  );
}

export default Assessment;