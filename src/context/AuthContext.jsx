import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // role can be 'student', 'head', or null
    const [user, setUser] = useState(null);

    const login = (email, password, role) => {
        // Mock login logic
        if (email && password) {
            setUser({
                email,
                role,
                name: role === 'student' ? 'Rahul Sharma' : 'Prof. Sharma',
                id: role === 'student' ? 1 : 999
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const updateUserName = (newName) => {
        if (user) {
            setUser({ ...user, name: newName });
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUserName, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
