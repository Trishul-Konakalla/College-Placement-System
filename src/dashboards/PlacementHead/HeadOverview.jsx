import React from 'react';
import { useData } from '../../context/DataContext';
import { Users, CheckCircle, Building, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const HeadOverview = () => {
    const { HEAD_ANALYTICS, DEPT_PLACEMENT_DATA, MONTHLY_TREND_DATA, COMPANY_HIRING_DATA, COMPETITION_STATS } = useData();

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="grid gap-6 grid-cols-4">
                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '0.75rem' }}>
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Total Students</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{HEAD_ANALYTICS.totalStudents}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '0.75rem' }}>
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Placed Students</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{HEAD_ANALYTICS.placedStudents}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', borderRadius: '0.75rem' }}>
                        <Building size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Companies</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{HEAD_ANALYTICS.companiesVisited}</h3>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', borderRadius: '0.75rem' }}>
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Avg Package</p>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{HEAD_ANALYTICS.averagePackage}</h3>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 grid-cols-2">
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Placement Over Time</h3>
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={MONTHLY_TREND_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--glass-border)" />
                                <XAxis dataKey="name" stroke="var(--text-muted)" />
                                <YAxis yAxisId="left" stroke="var(--text-muted)" />
                                <YAxis yAxisId="right" orientation="right" stroke="var(--text-muted)" />
                                <Tooltip contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }} />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="hired" stroke="var(--primary)" activeDot={{ r: 8 }} strokeWidth={3} />
                                <Line yAxisId="right" type="monotone" dataKey="drives" stroke="var(--warning)" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Department Wise Placement</h3>
                    <div style={{ height: 300, display: 'flex' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={DEPT_PLACEMENT_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="placed"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {DEPT_PLACEMENT_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 grid-cols-2" style={{ marginTop: '1.5rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Top Hiring Companies</h3>
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={COMPANY_HIRING_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--glass-border)" />
                                <XAxis type="number" stroke="var(--text-muted)" />
                                <YAxis dataKey="name" type="category" stroke="var(--text-muted)" width={100} />
                                <Tooltip contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }} />
                                <Legend />
                                <Bar dataKey="offers" fill="var(--secondary)" name="Offers Extended" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Skill Competition Index</h3>
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={COMPETITION_STATS}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--glass-border)" />
                                <XAxis dataKey="skill" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }} />
                                <Legend />
                                <Bar dataKey="demand" fill="var(--primary)" name="Industry Demand" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="students" fill="var(--warning)" name="Available Students" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadOverview;
