import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CoursesPage from '@/pages/CoursesPage';
import CourseDetailPage from '@/pages/CourseDetailPage';

function App() {
  return (
    <div className="app-layout">
      {/* Institutional and Cross-Portfolio Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/cst-349" element={<Navigate to="/courses/cst-349" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Institutional Academic Footer */}
      <Footer />
    </div>
  );
}

export default App;
