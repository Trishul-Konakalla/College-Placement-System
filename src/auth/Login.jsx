import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, User, Building } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // 'student' or 'head'
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password, role)) {
            if (role === 'student') navigate('/student');
            else navigate('/head');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
        }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                        Placement System
                    </h2>
                    <p className="text-muted">Welcome back! Please login to your account.</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button
                        type="button"
                        className={`btn ${role === 'student' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ flex: 1 }}
                        onClick={() => setRole('student')}
                    >
                        <User size={18} /> Student
                    </button>
                    <button
                        type="button"
                        className={`btn ${role === 'head' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ flex: 1 }}
                        onClick={() => setRole('head')}
                    >
                        <Building size={18} /> Head
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group" style={{ marginBottom: '2rem' }}>
                        <label>Password</label>
                        <input
                            type="password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        <LogIn size={18} /> Login as {role === 'student' ? 'Student' : 'Placement Head'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
