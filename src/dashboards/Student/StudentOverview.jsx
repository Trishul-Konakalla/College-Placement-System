import React from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { Briefcase, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StudentOverview = () => {
    const { STUDENT_ANALYTICS, DEPT_PLACEMENT_DATA } = useData();
    const { user } = useAuth();

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: 'white' }}>
                <h3 style={{ color: 'white' }}>Welcome back, {user?.name}!</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Here's your placement preparation overview.</p>
            </div>

            <div className="grid gap-6 grid-cols-4">
                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '0.75rem' }}>
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Total Applied</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{STUDENT_ANALYTICS.totalApplied}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '0.75rem' }}>
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Shortlisted</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{STUDENT_ANALYTICS.shortlisted}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', borderRadius: '0.75rem' }}>
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Interviews</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{STUDENT_ANALYTICS.interview}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', borderRadius: '0.75rem' }}>
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Skill Match</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{STUDENT_ANALYTICS.skillMatch}%</h3>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 grid-cols-2" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Department Placements</h3>
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={DEPT_PLACEMENT_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--glass-border)" />
                                <XAxis dataKey="name" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip
                                    contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }}
                                />
                                <Legend />
                                <Bar dataKey="placed" fill="var(--primary)" name="Placed" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="unplaced" fill="var(--text-muted)" name="Unplaced" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Readiness Meter</h3>
                    <div className="flex-col items-center justify-center" style={{ display: 'flex', height: '100%', paddingBottom: '2rem' }}>
                        <div style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: `conic-gradient(var(--secondary) ${STUDENT_ANALYTICS.placementProbability}%, var(--glass-border) 0)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: 120,
                                height: 120,
                                borderRadius: '50%',
                                background: 'var(--bg-light)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <h2 style={{ margin: 0, color: 'var(--secondary)' }}>{STUDENT_ANALYTICS.placementProbability}%</h2>
                                <span className="text-muted" style={{ fontSize: '0.75rem' }}>Probability</span>
                            </div>
                        </div>
                        <p className="text-center text-muted">You have a high probability of getting placed! Keep up the good work and prepare for interviews.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentOverview;
