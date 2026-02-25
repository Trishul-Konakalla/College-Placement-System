import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Send, Bell } from 'lucide-react';

const Broadcast = () => {
    const { addNotification } = useData();
    const [message, setMessage] = useState('');
    const [type, setType] = useState('info');
    const [target, setTarget] = useState('all');
    const [toast, setToast] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            addNotification({ text: message, type });
            setMessage('');
            setToast(true);
            setTimeout(() => setToast(false), 3000);
        }
    };

    return (
        <div className="flex-col gap-6" style={{ display: 'flex', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
                <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '0.5rem' }}>
                        <Bell size={24} />
                    </div>
                    <div>
                        <h3 style={{ margin: 0 }}>Placement Broadcast</h3>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>Send immediate notifications to students.</p>
                    </div>
                </div>

                <form onSubmit={handleSend}>
                    <div className="input-group">
                        <label>Message Content</label>
                        <textarea
                            className="input"
                            rows={5}
                            style={{ resize: 'vertical' }}
                            placeholder="Type your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '1.5rem' }}>
                        <div className="input-group">
                            <label>Target Audience</label>
                            <select className="input" value={target} onChange={e => setTarget(e.target.value)}>
                                <option value="all">All Students</option>
                                <option value="cs">CS Department</option>
                                <option value="it">IT Department</option>
                                <option value="ec">EC Department</option>
                                <option value="unplaced">Unplaced Students</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Message Type</label>
                            <select className="input" value={type} onChange={e => setType(e.target.value)}>
                                <option value="info">General Info</option>
                                <option value="success">Good News / Selection</option>
                                <option value="warning">Important Alert / Deadline</option>
                                <option value="danger">Urgent / Action Required</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button type="submit" className="btn btn-primary">
                            <Send size={18} /> Send Broadcast
                        </button>
                    </div>
                </form>
            </div>

            {toast && (
                <div style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    background: 'var(--secondary)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.5rem',
                    boxShadow: 'var(--glass-shadow)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    <CheckCircle size={20} /> Broadcast sent successfully!
                </div>
            )}
            <style>
                {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
            </style>
        </div>
    );
};

// CheckCircle local dummy to avoid another import issue if I forgot.
const CheckCircle = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;

export default Broadcast;
