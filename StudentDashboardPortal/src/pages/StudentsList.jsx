import React, { useState, useMemo, useCallback, useEffect } from "react";
import useStudents from "../hooks/useStudents";
import StudentCard from "../components/StudentCard";
import { FaSearch } from "react-icons/fa";
import './StudentsList.css'

export default function StudentsList() {
  const { state } = useStudents();
  const { students, loading, error } = state;

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 🔄 Debounce the search (500ms)
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredStudents = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return students;

    return students.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      (s.course || "").toLowerCase().includes(q)
    );
  }, [students, debouncedQuery]);

  return (
    <div className="container py-4">

      {/* ❗ Error Alert (Dismissible) */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>
      )}

      {/* Wrapper Card */}
      <div className="students-card shadow-sm p-4 rounded-4 bg-white">

        <h2 className="mb-3 fw-bold">Student Directory</h2>

        {/* Search Input */}
        <div className="mb-3 position-relative">
          <FaSearch className="search-icon" />
          <input
            value={query}
            onChange={handleSearch}
            className="form-control search-input ps-5"
            placeholder="Search by name, email or course"
          />
        </div>

        {/* Loading Skeletons */}
        {/* {loading && <StudentListSkeleton />} */}

        {/* Empty State */}
        {!loading && filteredStudents.length === 0 && (
          <div className="text-center py-5">
            <img
              src="https://undraw.co/api/illustrations/1c7e2ea0-c53a-49bb-9397-0988557b5cb0"
              alt="No results"
              className="empty-illustration mb-3"
              style={{ width: "220px", opacity: 0.9 }}
            />
            <p className="text-muted fs-5">
              We couldn't find anyone matching that name.
            </p>
          </div>
        )}

        {/* Student List */}
        {!loading &&
          filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}

      </div>
    </div>
  );
}
