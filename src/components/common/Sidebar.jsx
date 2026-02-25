import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    Home,
    User,
    Briefcase,
    Clock,
    LogOut,
    Users,
    Building,
    Bell,
    BarChart2
} from 'lucide-react';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const studentLinks = [
        { name: 'Dashboard', path: '/student', icon: <Home size={20} /> },
        { name: 'My Profile', path: '/student/profile', icon: <User size={20} /> },
        { name: 'Job Listings', path: '/student/jobs', icon: <Briefcase size={20} /> },
        { name: 'Application Status', path: '/student/applications', icon: <Clock size={20} /> },
    ];

    const headLinks = [
        { name: 'Dashboard', path: '/head', icon: <Home size={20} /> },
        { name: 'Student Management', path: '/head/students', icon: <Users size={20} /> },
        { name: 'Company Management', path: '/head/companies', icon: <Building size={20} /> },
        { name: 'Placement Broadcast', path: '/head/broadcast', icon: <Bell size={20} /> },
        { name: 'Analytics', path: '/head/analytics', icon: <BarChart2 size={20} /> },
    ];

    const links = user?.role === 'student' ? studentLinks : headLinks;

    return (
        <div className="sidebar">
            <div className="flex items-center gap-3" style={{ marginBottom: '2rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    PS
                </div>
                <div>
                    <h3 style={{ fontSize: '1rem', margin: 0 }}>Placement Sys</h3>
                    <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-muted)' }}>
                        {user?.role === 'student' ? 'Student Portal' : 'Admin Portal'}
                    </p>
                </div>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === '/student' || link.path === '/head'}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            background: isActive ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                            fontWeight: isActive ? '600' : '500',
                            textDecoration: 'none',
                            transition: 'all var(--transition-fast)'
                        })}
                    >
                        {link.icon}
                        {link.name}
                    </NavLink>
                ))}
            </nav>

            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-card-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <User size={18} />
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                        <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {user?.name}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {user?.email}
                        </p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline"
                    style={{ width: '100%', color: 'var(--danger)', borderColor: 'var(--danger)', justifyContent: 'center' }}
                >
                    <LogOut size={18} /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
