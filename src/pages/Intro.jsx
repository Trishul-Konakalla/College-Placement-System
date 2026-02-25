import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Building2, TrendingUp } from 'lucide-react';

const Intro = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
            fontFamily: 'Inter, sans-serif'
        }}>
            {/* Navigation Bar */}
            <nav style={{
                padding: '1.5rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <GraduationCap size={24} />
                    </div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: 'var(--text-dark)' }}>NextGen Placement</h1>
                </div>
                <div>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '50px', fontWeight: '600' }}>
                            Login <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 5%',
                textAlign: 'center'
            }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontWeight: '600', marginBottom: '2rem', fontSize: '0.875rem' }}>
                    🚀 Revolutionizing Campus Placements
                </div>

                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    color: 'var(--text-dark)',
                    maxWidth: '800px'
                }}>
                    Bridge the Gap Between <br />
                    <span style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>
                        Talent and Opportunity
                    </span>
                </h2>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    marginBottom: '3rem',
                    lineHeight: '1.6'
                }}>
                    A unified platform streamlining the recruitment process for students, placement cells, and top-tier companies. Track applications, manage profiles, and land your dream job.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyItems: 'center', justifyContent: 'center' }}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-primary" style={{
                            padding: '1rem 2rem',
                            fontSize: '1.125rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)'
                        }}>
                            Get Started <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>

                {/* Feature Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginTop: '5rem',
                    width: '100%',
                    maxWidth: '1000px'
                }}>
                    {/* Card 1 */}
                    <div className="card" style={{ padding: '2rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <GraduationCap size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>For Students</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Build stand-out profiles, browse premium job listings, and track your application status in real-time.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card" style={{ padding: '2rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Building2 size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>For Placement Heads</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Manage student records, coordinate with companies, and broadcast important announcements seamlessly.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card" style={{ padding: '2rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <TrendingUp size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>Advanced Analytics</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Gain insights into placement statistics, top recruiting companies, and branch-wise performance.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Intro;
