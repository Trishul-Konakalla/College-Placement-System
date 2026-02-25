import React, { createContext, useState, useContext } from 'react';
import {
    MOCK_STUDENTS,
    MOCK_COMPANIES,
    MOCK_NOTIFICATIONS,
    STUDENT_ANALYTICS,
    HEAD_ANALYTICS,
    DEPT_PLACEMENT_DATA,
    MONTHLY_TREND_DATA,
    COMPANY_HIRING_DATA,
    COMPETITION_STATS
} from '../mockData';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [students, setStudents] = useState(MOCK_STUDENTS);
    const [companies, setCompanies] = useState(MOCK_COMPANIES);
    const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

    // Operations
    const updateStudentStatus = (id, status) => {
        setStudents(students.map(s => s.id === id ? { ...s, status } : s));
    };

    const updateStudentRemark = (id, remark) => {
        setStudents(students.map(s => s.id === id ? { ...s, remark } : s));
    };

    const updateStudentProfile = (id, newProfileData) => {
        setStudents(students.map(s => s.id === id ? { ...s, ...newProfileData } : s));
    };

    const addCompany = (company) => {
        setCompanies([...companies, { ...company, id: Date.now() }]);
    };

    const deleteCompany = (id) => {
        setCompanies(companies.filter(c => c.id !== id));
    };

    const updateCompany = (id, updatedCompany) => {
        setCompanies(companies.map(c => c.id === id ? { ...c, ...updatedCompany } : c));
    };

    const addNotification = (notif) => {
        setNotifications([{ ...notif, id: Date.now(), date: 'Just now' }, ...notifications]);
    };

    return (
        <DataContext.Provider value={{
            students,
            companies,
            notifications,
            STUDENT_ANALYTICS,
            HEAD_ANALYTICS,
            DEPT_PLACEMENT_DATA,
            MONTHLY_TREND_DATA,
            COMPANY_HIRING_DATA,
            COMPETITION_STATS,
            updateStudentStatus,
            updateStudentRemark,
            updateStudentProfile,
            addCompany,
            deleteCompany,
            updateCompany,
            addNotification
        }}>
            {children}
        </DataContext.Provider>
    );
};
