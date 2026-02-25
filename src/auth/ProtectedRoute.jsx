import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRole }) => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRole && user.role !== allowedRole) {
        // If user is trying to access the wrong dashboard
        return <Navigate to={user.role === 'student' ? '/student' : '/head'} replace />;
    }

    return children;
};

export default ProtectedRoute;
