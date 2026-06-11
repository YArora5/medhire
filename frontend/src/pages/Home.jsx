import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">

        <div className="logo-wrapper">
          <div className="logo-icon">
            MH
          </div>

          <h2 className="logo">
            Med<span>Hire</span>
          </h2>
        </div>

        <div className="nav-buttons">

          <Link to="/nurse-login">
            <button className="btn btn-outline">
              Nurse Login
            </button>
          </Link>

          <Link to="/hospital-login">
            <button className="btn btn-primary">
              Hospital Login
            </button>
          </Link>

        </div>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            Trusted By 150+ Hospitals Across India
          </div>

          <h1>
            Elevating
            <span> Healthcare </span>
            Recruitment
          </h1>

          <p>
            A premium healthcare recruitment platform
            connecting hospitals with highly qualified
            nursing professionals. Faster hiring,
            verified credentials and smarter workforce
            management.
          </p>

          <div className="hero-buttons">

            <Link to="/nurse-register">
              <button className="btn btn-primary">
                Join As Nurse
              </button>
            </Link>

            <Link to="/hospital-register">
              <button className="btn btn-outline">
                Register Hospital
              </button>
            </Link>

          </div>

          <div className="hero-metrics">

            <div className="metric-card">
              <h3>500+</h3>
              <span>Nurses</span>
            </div>

            <div className="metric-card">
              <h3>150+</h3>
              <span>Hospitals</span>
            </div>

            <div className="metric-card">
              <h3>95%</h3>
              <span>Success Rate</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200"
            alt=""
          />

          <div className="floating-card card-1">
            <h4>+42</h4>
            <p>New Nurse Profiles</p>
          </div>

          <div className="floating-card card-2">
            <h4>98%</h4>
            <p>Verification Rate</p>
          </div>

        </div>

      </section>

      <section className="trusted">

        <h2>
          Trusted By Leading Healthcare Institutions
        </h2>

        <div className="trusted-grid">

          <div>Apollo Hospitals</div>
          <div>Fortis</div>
          <div>Max Healthcare</div>
          <div>Medanta</div>
          <div>Narayana Health</div>

        </div>

      </section>

      <section className="features">

        <h2 className="section-title">
          Why Choose MedHire?
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Verified Nurses</h3>
            <p>
              Every nurse profile is verified
              before appearing on the platform.
            </p>
          </div>

          <div className="feature-card">
            <h3>Fast Recruitment</h3>
            <p>
              Hospitals can send direct hiring
              requests within seconds.
            </p>
          </div>

          <div className="feature-card">
            <h3>Resume & Certificates</h3>
            <p>
              Access nurse resumes and
              professional certifications.
            </p>
          </div>

          <div className="feature-card">
            <h3>Availability Tracking</h3>
            <p>
              View nurse availability before
              sending requests.
            </p>
          </div>

          <div className="feature-card">
            <h3>Assessment Ready</h3>
            <p>
              AI assessment module coming soon.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Dashboard</h3>
            <p>
              Manage requests, profiles and
              hiring workflow from one place.
            </p>
          </div>

        </div>

      </section>

      <section className="testimonials">

        <h2 className="section-title">
          Trusted By Healthcare Professionals
        </h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "MedHire reduced our hiring
              process from weeks to days."
            </p>

            <h4>Apollo Hospital</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Finding qualified nurses has
              never been easier."
            </p>

            <h4>Fortis Healthcare</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Simple, professional and
              efficient platform."
            </p>

            <h4>Max Healthcare</h4>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>
          Ready To Transform Healthcare Hiring?
        </h2>

        <p>
          Join MedHire and connect hospitals
          with skilled nursing professionals.
        </p>

        <div className="hero-buttons">

          <Link to="/hospital-register">
            <button className="btn btn-primary">
              Get Started
            </button>
          </Link>

        </div>

      </section>

      <footer className="footer">

        <h3>MedHire</h3>

        <p>
          © 2026 MedHire. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;

