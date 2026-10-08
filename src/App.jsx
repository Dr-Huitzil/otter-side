import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const CourseDetailPage = lazy(() => import('@/pages/CourseDetailPage'));

function App() {
  return (
    <div className="app-layout">
      {/* Institutional and Cross-Portfolio Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '40vh',
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.88rem',
                  color: 'var(--accent-teal-bright, #52b788)',
                  letterSpacing: '0.08em'
                }}
              >
                [ INITIALIZING VIEW BUFFER... ]
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CourseDetailPage />} />
              <Route path="/cst-349" element={<Navigate to="/courses/cst-349" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Institutional Academic Footer */}
      <Footer />
    </div>
  );
}

export default App;
