import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const StudentsList = lazy(() => import("./pages/StudentsList"));
const AddStudent = lazy(() => import("./pages/AddStudent"));
const StudentDetails = lazy(() => import("./pages/StudentDetails"));

export default function App() {
  return (
    <>
      <AppNavbar /><br />
      <Suspense fallback={<div className="container"><p>Loading page...</p></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
