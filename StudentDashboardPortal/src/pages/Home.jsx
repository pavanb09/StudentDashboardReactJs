import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaSearch, FaUsers, FaUserGraduate, FaNetworkWired, FaCloudDownloadAlt } from "react-icons/fa";
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

            <Link to="/students" className="btn btn-primary btn-lg mt-3">
              Get Started
            </Link>
          </div>

        </div>
      </section>


      {/* ACTION CARDS SECTION */}
      <section className="action-cards-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Student Actions</h2>
          <p className="text-center text-muted mb-5">Choose a quick action below to begin managing your students.</p>

          <div className="row g-4">

            {/* Add Student Card */}
            <div className="col-md-4">
              <div className="action-card shadow-sm p-4 text-center">
                <FaUserPlus className="action-icon mb-3" />
                <h4>Add Student</h4>
                <p>Add a new student to the dashboard with name, email, and course details.</p>
                <Link to="/add" className="btn btn-outline-primary mt-2">Add Student</Link>
              </div>
            </div>

            {/* Search Students Card */}
            <div className="col-md-4">
              <div className="action-card shadow-sm p-4 text-center">
                <FaSearch className="action-icon mb-3" />
                <h4>Search Students</h4>
                <p>Find any student instantly using the built-in real-time search feature.</p>
                <Link to="/students" className="btn btn-outline-secondary mt-2">Search Students</Link>
              </div>
            </div>

            {/* View Students Card */}
            <div className="col-md-4">
              <div className="action-card shadow-sm p-4 text-center">
                <FaUsers className="action-icon mb-3" />
                <h4>View All Students</h4>
                <p>View complete list of students with images, emails, and course details.</p>
                <Link to="/students" className="btn btn-success mt-2">View Students</Link>
              </div>
            </div>

          </div>
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
