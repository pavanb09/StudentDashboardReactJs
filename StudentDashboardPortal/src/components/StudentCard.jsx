import React from "react";
import { Link } from "react-router-dom";

function StudentCard({ student }) {
  const avatarUrl = student.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D6EFD&color=fff&rounded=true&size=64`;

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={avatarUrl}
            alt={student.name}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <div>
            <h5 className="card-title mb-1">{student.name}</h5>
            <p className="card-text mb-0 text-muted small">{student.email} • {student.course}</p>
          </div>
        </div>

        <Link to={`/students/${student.id}`} className="btn btn-sm btn-outline-primary">View Details</Link>
      </div>
    </div>
  );
}

export default React.memo(StudentCard);
