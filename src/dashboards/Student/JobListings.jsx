import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Building, Calendar, DollarSign, Search, Bookmark } from 'lucide-react';

const JobListings = () => {
    const { companies } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]); // local mock state

    const handleApply = (id) => {
        setAppliedJobs([...appliedJobs, id]);
    };

    const filtered = companies.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-col gap-6" style={{ display: 'flex' }}>
            <div className="card flex items-center gap-4 justify-between" style={{ padding: '1rem 1.5rem' }}>
                <h3 style={{ margin: 0 }}>Available Opportunities</h3>
                <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.5)', padding: '0.5rem 1rem', borderRadius: '2rem', width: '300px', border: '1px solid var(--glass-border)' }}>
                    <Search size={18} className="text-muted" style={{ marginRight: '0.5rem' }} />
                    <input
                        type="text"
                        placeholder="Search companies or roles..."
                        style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, color: 'var(--text-dark)' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid gap-6 grid-cols-3">
                {filtered.map(company => (
                    <div key={company.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                            <img src={company.logoUrl} alt={company.name} style={{ width: 48, height: 48, borderRadius: '0.5rem' }} />
                            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                <Bookmark size={20} />
                            </button>
                        </div>

                        <h4 style={{ margin: 0, fontSize: '1.125rem' }}>{company.role}</h4>
                        <p className="text-muted" style={{ fontWeight: 500, margin: '0.25rem 0 1rem 0' }}>{company.name}</p>

                        <div className="flex-col gap-2" style={{ display: 'flex', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                            <div className="flex items-center gap-2 text-muted">
                                <DollarSign size={16} /> {company.package}
                            </div>
                            <div className="flex items-center gap-2 text-muted">
                                <Building size={16} /> Eligibility: {company.eligibility}
                            </div>
                            <div className="flex items-center gap-2 text-muted">
                                <Calendar size={16} /> Drive: {company.driveDate}
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto' }}>
                            <button
                                className={`btn ${appliedJobs.includes(company.id) ? 'btn-outline' : 'btn-primary'}`}
                                style={{ width: '100%' }}
                                onClick={() => handleApply(company.id)}
                                disabled={appliedJobs.includes(company.id)}
                            >
                                {appliedJobs.includes(company.id) ? 'Applied' : 'Apply Now'}
                            </button>
                        </div>
                    </div>
                ))}
                {filtered.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        <Building size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                        <p>No companies found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobListings;
