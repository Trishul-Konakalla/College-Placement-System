import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Moon, Sun } from 'lucide-react';

const Layout = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <header className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0 }}>Dashboard</h2>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="btn"
                            style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--glass-bg)' }}
                            title="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </header>

                {/* This is where the nested routes will render */}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
