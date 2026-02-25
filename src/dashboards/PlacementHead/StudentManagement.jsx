import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Search, FileText, Check, X, Download, MessageSquare } from 'lucide-react';

const StudentManagement = () => {
    const { students, updateStudentStatus, updateStudentRemark } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDept, setFilterDept] = useState('All');
    const [remarkText, setRemarkText] = useState('');
    const [editingRemarkId, setEditingRemarkId] = useState(null);

    const departments = ['All', ...new Set(students.map(s => s.department))];

    const filtered = students.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = filterDept === 'All' || s.department === filterDept;
        return matchesSearch && matchesDept;
    });

    const handleSaveRemark = (id) => {
        updateStudentRemark(id, remarkText);
        setEditingRemarkId(null);
        setRemarkText('');
    };

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="card flex justify-between items-center">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-light)', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '300px', border: '1px solid var(--glass-border)' }}>
                        <Search size={18} className="text-muted" style={{ marginRight: '0.5rem' }} />
                        <input
                            type="text"
                            placeholder="Search by name or roll number..."
                            style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, color: 'var(--text-dark)' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="input"
                        style={{ width: '150px' }}
                        value={filterDept}
                        onChange={(e) => setFilterDept(e.target.value)}
                    >
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>

                <button className="btn btn-outline">
                    <Download size={18} /> Export List
                </button>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Student info</th>
                                <th>Department</th>
                                <th>CGPA</th>
                                <th>Status</th>
                                <th>Resume</th>
                                <th>Remarks</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(student => (
                                <tr key={student.id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                                {student.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, fontWeight: 500 }}>{student.name}</p>
                                                <p className="text-muted" style={{ margin: 0, fontSize: '0.75rem' }}>{student.rollNumber}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{student.department}</td>
                                    <td><span style={{ fontWeight: 600 }}>{student.cgpa}</span></td>
                                    <td>
                                        <span className={`badge ${student.status === 'Selected' ? 'badge-success' : student.status === 'Rejected' ? 'badge-danger' : student.status === 'Shortlisted' ? 'badge-primary' : 'badge-warning'}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td>
                                        <a href={student.resumeUrl} className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
                                            <FileText size={14} /> View
                                        </a>
                                    </td>
                                    <td>
                                        {editingRemarkId === student.id ? (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', width: '120px' }}
                                                    value={remarkText}
                                                    onChange={e => setRemarkText(e.target.value)}
                                                    autoFocus
                                                />
                                                <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem' }} onClick={() => handleSaveRemark(student.id)}>Save</button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
                                                <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {student.remark || <span className="text-muted">No remarks</span>}
                                                </span>
                                                <button
                                                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                                                    onClick={() => { setEditingRemarkId(student.id); setRemarkText(student.remark || ''); }}
                                                >
                                                    <MessageSquare size={14} />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        <select
                                            className="input"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                                            value={student.status}
                                            onChange={(e) => updateStudentStatus(student.id, e.target.value)}
                                        >
                                            <option value="Applied">Applied</option>
                                            <option value="Shortlisted">Shortlisted</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Hold">Hold</option>
                                            <option value="Selected">Selected</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="Placed">Placed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                        No students found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;
