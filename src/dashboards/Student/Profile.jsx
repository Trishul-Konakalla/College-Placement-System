import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { Save, Upload, X, CheckCircle } from 'lucide-react';

const Profile = () => {
    const { students, updateStudentProfile } = useData();
    const { updateUserName } = useAuth();
    const student = students[0]; // Active student Mock

    const [name, setName] = useState(student.name);
    const [cgpa, setCgpa] = useState(student.cgpa);
    const [skills, setSkills] = useState(student.skills);
    const [newSkill, setNewSkill] = useState('');
    const [saved, setSaved] = useState(false);

    const handleAddSkill = (e) => {
        if (e.key === 'Enter' && newSkill.trim() && !skills.includes(newSkill.trim())) {
            e.preventDefault();
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter(s => s !== skillToRemove));
    };

    const handleSave = () => {
        updateStudentProfile(student.id, {
            name,
            cgpa,
            skills,
            profileCompletion: Math.min(100, student.profileCompletion + 5) // bump completion slightly for mock effect
        });
        updateUserName(name); // Sync with sidebar
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="flex-col gap-6" style={{ display: 'flex', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
                <h3 style={{ marginBottom: '1.5rem' }}>Profile Completion</h3>
                <div style={{ width: '100%', height: '8px', background: 'var(--glass-border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                    <div style={{ width: `${student.profileCompletion}%`, height: '100%', background: 'var(--primary)', transition: 'width var(--transition-normal)' }}></div>
                </div>
                <p className="text-muted" style={{ fontSize: '0.875rem', textAlign: 'right' }}>{student.profileCompletion}% Completed</p>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '1.5rem' }}>Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Roll Number</label>
                        <input type="text" className="input" defaultValue={student.rollNumber} disabled style={{ opacity: 0.7 }} />
                    </div>
                    <div className="input-group">
                        <label>Department</label>
                        <input type="text" className="input" defaultValue={student.department} disabled style={{ opacity: 0.7 }} />
                    </div>
                    <div className="input-group">
                        <label>CGPA</label>
                        <input type="text" className="input" value={cgpa} onChange={e => setCgpa(e.target.value)} />
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                        Skills
                    </label>
                    <div className="flex flex-wrap gap-2" style={{ marginBottom: '0.5rem' }}>
                        {skills.map(skill => (
                            <span key={skill} className="badge badge-primary flex items-center gap-1">
                                {skill}
                                <X size={14} style={{ cursor: 'pointer' }} onClick={() => removeSkill(skill)} />
                            </span>
                        ))}
                    </div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Type a skill and press Enter"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={handleAddSkill}
                        style={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                        Resume
                    </label>
                    <div style={{
                        border: '2px dashed var(--glass-border)',
                        borderRadius: '0.5rem',
                        padding: '2rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                    >
                        <Upload size={32} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                        <p style={{ margin: 0, fontWeight: 500 }}>Click to upload or drag and drop</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>PDF, DOCX up to 5MB</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
                    {saved && (
                        <span style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <CheckCircle size={16} /> Profile Saved
                        </span>
                    )}
                    <button className="btn btn-primary" onClick={handleSave}>
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
