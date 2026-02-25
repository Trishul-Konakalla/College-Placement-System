import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Building, Edit2, Trash2, X } from 'lucide-react';

const CompanyManagement = () => {
    const { companies, addCompany, deleteCompany, updateCompany } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [newComp, setNewComp] = useState({ name: '', role: '', package: '', eligibility: '', driveDate: '' });

    const openEditModal = (company) => {
        setEditingId(company.id);
        setNewComp(company);
        setIsModalOpen(true);
    };

    const openAddModal = () => {
        setEditingId(null);
        setNewComp({ name: '', role: '', package: '', eligibility: '', driveDate: '' });
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (editingId) {
            updateCompany(editingId, newComp);
        } else {
            addCompany({
                ...newComp,
                logoUrl: `https://ui-avatars.com/api/?name=${newComp.name}&background=random&color=fff`
            });
        }
        setIsModalOpen(false);
        setIsModalOpen(false);
    };

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="flex justify-between items-center">
                <h3 style={{ margin: 0 }}>Company Drives</h3>
                <button className="btn btn-primary" onClick={openAddModal}>
                    <Plus size={18} /> Add New Drive
                </button>
            </div>

            <div className="grid gap-6 grid-cols-3">
                {companies.map(company => (
                    <div key={company.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                            <img src={company.logoUrl} alt={company.name} style={{ width: 48, height: 48, borderRadius: '0.5rem' }} />
                            <div className="flex gap-2">
                                <button onClick={() => openEditModal(company)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.25rem' }}><Edit2 size={16} /></button>
                                <button onClick={() => deleteCompany(company.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--danger)', padding: '0.25rem' }}><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <h4 style={{ margin: 0, fontSize: '1.125rem' }}>{company.name}</h4>
                        <p className="text-muted" style={{ fontWeight: 500, margin: '0.25rem 0 1rem 0' }}>{company.role}</p>

                        <div className="flex-col gap-2" style={{ display: 'flex', marginBottom: '0', fontSize: '0.875rem' }}>
                            <div className="flex items-center gap-2 text-muted">
                                <span style={{ fontWeight: 600 }}>Pkg:</span> {company.package}
                            </div>
                            <div className="flex items-center gap-2 text-muted">
                                <span style={{ fontWeight: 600 }}>Eligib:</span> {company.eligibility}
                            </div>
                            <div className="flex items-center gap-2 text-muted">
                                <span style={{ fontWeight: 600 }}>Date:</span> {company.driveDate}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
                    <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
                        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ margin: 0 }}>{editingId ? 'Edit Company Drive' : 'Add New Company Drive'}</h3>
                            <button
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave}>
                            <div className="input-group">
                                <label>Company Name</label>
                                <input className="input" required value={newComp.name} onChange={e => setNewComp({ ...newComp, name: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <label>Role</label>
                                <input className="input" required value={newComp.role} onChange={e => setNewComp({ ...newComp, role: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="input-group">
                                    <label>Package</label>
                                    <input className="input" required value={newComp.package} onChange={e => setNewComp({ ...newComp, package: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Drive Date</label>
                                    <input type="date" className="input" required value={newComp.driveDate} onChange={e => setNewComp({ ...newComp, driveDate: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                                <label>Eligibility Criteria</label>
                                <input className="input" required value={newComp.eligibility} onChange={e => setNewComp({ ...newComp, eligibility: e.target.value })} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Save Drive</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyManagement;
