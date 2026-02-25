import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Components
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Layout from './components/common/Layout';
import Intro from './pages/Intro';

// Student Dashboards
import StudentOverview from './dashboards/Student/StudentOverview';
import Profile from './dashboards/Student/Profile';
import JobListings from './dashboards/Student/JobListings';
import ApplicationTracker from './dashboards/Student/ApplicationTracker';

// Head Dashboards
import HeadOverview from './dashboards/PlacementHead/HeadOverview';
import StudentManagement from './dashboards/PlacementHead/StudentManagement';
import CompanyManagement from './dashboards/PlacementHead/CompanyManagement';
import Broadcast from './dashboards/PlacementHead/Broadcast';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Student Routes */}
            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRole="student">
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<StudentOverview />} />
              <Route path="profile" element={<Profile />} />
              <Route path="jobs" element={<JobListings />} />
              <Route path="applications" element={<ApplicationTracker />} />
            </Route>

            {/* Head Routes */}
            <Route
              path="/head"
              element={
                <ProtectedRoute allowedRole="head">
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<HeadOverview />} />
              <Route path="students" element={<StudentManagement />} />
              <Route path="companies" element={<CompanyManagement />} />
              <Route path="broadcast" element={<Broadcast />} />
              {/* Fallback for analytics sidebar link for now */}
              <Route path="analytics" element={<Navigate to="/head" replace />} />
            </Route>

            <Route path="/" element={<Intro />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
