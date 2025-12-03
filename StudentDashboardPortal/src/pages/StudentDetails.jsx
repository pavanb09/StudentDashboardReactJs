import React from "react";
import { useParams, Link } from "react-router-dom";
import useStudents from "../hooks/useStudents";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const { state } = useStudents();
  const { students, loading } = state;

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning shadow-sm rounded-3 p-4">
          <h3>Student Not Found</h3>
          <p>No student exists with ID <strong>{id}</strong>.</p>
          <Link to="/students" className="btn btn-secondary">
            Back to Students
          </Link>
        </div>
      </div>
    );
  }

  const avatar =
    student.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D6EFD&color=fff&size=160`;

  return (
    <div className="student-details-page container-lg py-5 d-flex justify-content-center">
      {/* Card centered */}
      <div className="details-card shadow-lg rounded-4 p-4 w-100" style={{ maxWidth: 920 }}>
        {/* Action Bar */}
        <div className="action-bar mb-3 d-flex justify-content-between align-items-center">
          <Link to="/students" className="btn btn-outline-primary btn-sm">
            ← Back to Students
          </Link>

          {/* simple realtime status on right */}
          <div className="realtime-status d-flex align-items-center">
            <span className="status-dot online" aria-hidden></span>
            <small className="text-muted ms-2">Active now</small>
          </div>
        </div>

        {/* Content Grid: center the profile */}
        <div className="profile-center">
          <aside className="profile-sidebar text-center">
            <div className="avatar-wrap mx-auto">
              <img src={avatar} alt={student.name} className="profile-avatar" />
            </div>

            <div className="name-row d-flex align-items-center justify-content-center mt-3">
              <h1 className="student-name mb-0">{student.name}</h1>
              <span className="verified-badge ms-2" title="Verified student">✔</span>
            </div>

            <p className="text-muted small mb-3">{student.course || "General"}</p>

            <div className="info-cards mw-100">
              <div className="info-card">
                <h6>Email</h6>
                <p>{student.email}</p>
              </div>

              {student.phone && (
                <div className="info-card">
                  <h6>Phone</h6>
                  <p>{student.phone}</p>
                </div>
              )}

            </div>

            <div className="mt-4 d-flex gap-2 justify-content-center">
              {/* <Link to={`/students/${student.id}/edit`} className="btn btn-primary btn-sm">
                Edit Profile
              </Link> */}
              <Link to="/students" className="btn btn-outline-secondary btn-sm">
                Back
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
