import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";
import useStudents from "../hooks/useStudents";

export default function AddStudent() {
  const { dispatch } = useStudents();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",     // ✅ Added phone
    course: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Invalid email address";

    // OPTIONAL phone validation — accepts numbers, +, -, space
    if (form.phone.trim() && !/^[0-9+\-\s]+$/.test(form.phone))
      e.phone = "Invalid phone number";

    return e;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((p) => ({ ...p, [name]: null }));
  };

  const handleCancel = () => navigate("/students");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const eobj = validate();
    setErrors(eobj);

    if (Object.keys(eobj).length) {
      const firstKey = Object.keys(eobj)[0];
      document.querySelector(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);

    const newStudent = {
      id: String(Date.now()),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,   // ✅ Save phone
      course: form.course.trim() || "General",
      image: null,
    };

    dispatch({ type: "ADD_STUDENT", payload: newStudent });

    setTimeout(() => navigate("/students"), 250);
  };

  return (
    <div className="container py-4">
      <h2 className="page-title mb-1 mt-3">Add Student</h2>
      <p className="page-subtitle text-muted mb-4">
        Enter the student's primary contact and course details.
      </p>

      <div className="card form-card p-4">
        <form onSubmit={handleSubmit} noValidate>

          {/* Contact Information */}
          <fieldset className="mb-4 border-0 p-0">
            <legend className="fieldset-legend">Contact Information</legend>

            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`form-control form-input ${errors.name ? "is-invalid" : ""}`}
                placeholder="Full name (e.g., John Doe)"
                disabled={isSubmitting}
              />
              {errors.name && (
                <div className="invalid-feedback d-flex align-items-center">
                  <span className="me-1">⚠</span> {errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`form-control form-input ${errors.email ? "is-invalid" : ""}`}
                placeholder="name@example.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <div className="invalid-feedback d-flex align-items-center">
                  <span className="me-1">⚠</span> {errors.email}
                </div>
              )}
            </div>

            {/* ✅ PHONE FIELD ADDED */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`form-control form-input ${errors.phone ? "is-invalid" : ""}`}
                placeholder="+91 98765 43210"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <div className="invalid-feedback d-flex align-items-center">
                  <span className="me-1">⚠</span> {errors.phone}
                </div>
              )}
            </div>
          </fieldset>

          {/* Course Group */}
          <fieldset className="mb-4 border-0 p-0">
            <legend className="fieldset-legend">Course Details</legend>

            <div className="mb-3">
              <label htmlFor="course" className="form-label fw-semibold">Course</label>
              <input
                id="course"
                name="course"
                list="courses"
                value={form.course}
                onChange={handleChange}
                className="form-control form-input"
                placeholder="Select or type a course"
                disabled={isSubmitting}
              />
              <datalist id="courses">
                <option value="General" />
                <option value="Science" />
                <option value="Arts" />
                <option value="Technology" />
                <option value="Mathematics" />
              </datalist>
            </div>
          </fieldset>

          {/* Actions */}
          <div className="d-flex gap-3 align-items-center mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary btn-cancel"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary btn-submit flex-grow-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  <span className="ms-2">Adding…</span>
                </>
              ) : (
                "Add Student"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
