import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaNetworkWired, FaCloudDownloadAlt } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <section className="hero container py-5">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6 hero-text">
            <h1 className="hero-title">
              Streamline Your <span>Student Management</span>
            </h1>

            <p className="hero-subtitle">
              A powerful React-based Student Dashboard designed for learning APIs, context management, routing, forms, and UI optimization. 
              Add, view, and organize students with ease—all inside a clean, modern interface.
            </p>

            <div className="hero-buttons mt-4">
              <Link to="/students" className="btn btn-primary btn-lg me-3">
                Get Started
              </Link>
              {/* <a
                href="https://dummyjson.com" 
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-lg"
              >
                View Documentation
              </a> */}
            </div>
          </div>

          {/* RIGHT SIDE — Illustration */}
          {/* <div className="col-md-6 text-center">
            <div className="hero-illustration">
              <img
                src="https://undraw.co/api/illustrations/23ba40b5-199b-442d-bae0-9eef3de2bb14"
                alt="Student Dashboard Illustration"
                className="img-fluid hero-img"
              />
            </div>
          </div> */}

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section py-5">
        <div className="container text-center">

          <h2 className="features-title mb-4">Core Features & Tech Stack</h2>

          <p className="text-muted mb-5">
            This Student Dashboard is built using modern React tools to help you practice real-world development workflows.
          </p>

          <div className="row g-4">

            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="feature-card shadow-sm">
                <FaUserGraduate className="feature-icon" />
                <h5>Student Listing & Management</h5>
                <p>Add, fetch, display, and organize student data using a clean UI and optimized state management.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="feature-card shadow-sm">
                <FaNetworkWired className="feature-icon" />
                <h5>Context API + Reducer</h5>
                <p>Centralized global state with a scalable reducer architecture for real-time student updates.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="feature-card shadow-sm">
                <FaCloudDownloadAlt className="feature-icon" />
                <h5>Axios API Integration</h5>
                <p>Fetch real student-like data from DummyJSON with async/await & error handling best practices.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
