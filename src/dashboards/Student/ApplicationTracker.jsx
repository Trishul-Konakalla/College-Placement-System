import React from 'react';
import { useData } from '../../context/DataContext';

const STAGES = ['Applied', 'Shortlisted', 'Interview', 'Selected'];

const StatusLine = ({ currentStatus }) => {
    const currentIndex = STAGES.indexOf(currentStatus);
    const isRejected = currentStatus === 'Rejected';

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', marginTop: '2rem', marginBottom: '1rem' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: 'var(--glass-border)', zIndex: 0, transform: 'translateY(-50%)' }}>
                <div style={{ width: `${(currentIndex / (STAGES.length - 1)) * 100}%`, height: '100%', background: isRejected ? 'var(--danger)' : 'var(--primary)', transition: 'width 0.5s ease' }}></div>
            </div>

            {STAGES.map((stage, index) => {
                const isCompleted = index <= currentIndex;
                const isActive = index === currentIndex;

                let bgColor = 'var(--bg-light)';
                let borderColor = 'var(--glass-border)';

                if (isCompleted) {
                    bgColor = isRejected && isActive ? 'var(--danger)' : 'var(--primary)';
                    borderColor = isRejected && isActive ? 'var(--danger)' : 'var(--primary)';
                }

                return (
                    <div key={stage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '80px' }}>
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: bgColor,
                            border: `2px solid ${borderColor}`,
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.75rem'
                        }}>
                            {isCompleted ? '✓' : ''}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: isActive ? 600 : 400, color: isCompleted ? 'var(--text-dark)' : 'var(--text-muted)' }}>
                            {isRejected && isActive ? 'Rejected' : stage}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

const ApplicationTracker = () => {
    // Mock applications
    const applications = [
        { id: 1, company: 'TechNova Solutions', role: 'Frontend Developer', appliedOn: '2024-02-10', status: 'Shortlisted' },
        { id: 2, company: 'DataDynamix', role: 'Data Analyst', appliedOn: '2024-02-12', status: 'Applied' },
        { id: 3, company: 'Google', role: 'SWE', appliedOn: '2024-01-20', status: 'Selected' },
        { id: 4, company: 'Meta', role: 'React Dev', appliedOn: '2024-01-15', status: 'Rejected' },
    ];

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="card">
                <h3 style={{ marginBottom: '0.5rem' }}>Application Status Tracker</h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>Track your progress across all applied companies.</p>

                <div className="flex-col gap-6" style={{ display: 'flex' }}>
                    {applications.map(app => (
                        <div key={app.id} style={{ border: '1px solid var(--glass-border)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 style={{ margin: 0 }}>{app.company}</h4>
                                    <p className="text-muted" style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>{app.role} • Applied: {app.appliedOn}</p>
                                </div>
                                <span className={`badge ${app.status === 'Selected' ? 'badge-success' : app.status === 'Rejected' ? 'badge-danger' : app.status === 'Shortlisted' ? 'badge-primary' : 'badge-warning'}`}>
                                    {app.status}
                                </span>
                            </div>

                            <StatusLine currentStatus={app.status === 'Rejected' ? 'Interview' : app.status} />

                            {app.status === 'Rejected' && (
                                <div style={{ marginTop: '0', textAlign: 'center' }}>
                                    <StatusLine currentStatus="Rejected" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationTracker;
