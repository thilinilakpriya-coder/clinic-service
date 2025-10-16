import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "./Pagination";
import AddDoctorModal from "./AddDoctorModal";
import EditDoctorModal from "./EditDoctorModal";
import Navbar from "./Header";
import Footer from "./Footer";

const initialDoctors = [
  { id: 1, name: 'John Doe', exp: '0-1yr', spec: 'General', time: '9:00 AM-12:00 PM', day: 'Mon-Fri', gender: 'Male', rating: 4, available: true },
];

export default function DoctorTable() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editDoctor, setEditDoctor] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return doctors;
    return doctors.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.spec.toLowerCase().includes(q) ||
      d.exp.toLowerCase().includes(q)
    );
  }, [doctors, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function deleteDoctor(id) {
    if (!window.confirm('Delete this doctor?')) return;
    setDoctors(prev => prev.filter(d => d.id !== id));
  }

  function handleAddDoctor(newDoctor) {
    setDoctors(prev => [newDoctor, ...prev]);
    setCurrentPage(1);
    setIsAddModalOpen(false);
  }

  function handleEditDoctor(updatedDoctor) {
    setDoctors(prev => prev.map(d => d.id === updatedDoctor.id ? updatedDoctor : d));
    setEditDoctor(null);
  }

  return (
    <>
      <Navbar />

      {/* Content Wrapper with full width */}
      <div className="page-content container">

        {/* Add/Edit Modals */}
        <AddDoctorModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddDoctor}
        />
        <EditDoctorModal
          isOpen={!!editDoctor}
          doctor={editDoctor}
          onClose={() => setEditDoctor(null)}
          onSave={handleEditDoctor}
        />

        {/* Top row with title and search */}
        <div className="top-row">
          <div>
            <div className="page-title">MANAGE DOCTORS</div>
            <div style={{ height: 8 }} />
            <div className="search-wrap">
              <div className="search-input">
                <FiSearch style={{ marginLeft: 6 }} />
                <input
                  placeholder="Search by name or specialization"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setCurrentPage(1); }}
                  style={{ border: 'none', outline: 'none', padding: '10px', width: '100%' }}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="add-btn" onClick={() => setIsAddModalOpen(true)}>Add New Doctor</button>
          </div>
        </div>

        {/* Doctor table */}
        <div className="card" style={{ marginTop: 12 }}>
          <div className="table-header">
            <div>Doctor Name</div>
            <div>Experience</div>
            <div>Specialization</div>
            <div>Time</div>
            <div>Day</div>
            <div>Gender</div>
            <div>Rating</div>
            <div>Availability</div>
            <div>Action</div>
          </div>

          {pageData.map(doc => (
            <div key={doc.id} className="table-row">
              <div>{doc.name}</div>
              <div>{doc.exp}</div>
              <div>{doc.spec}</div>
              <div className="time">{doc.time}</div>
              <div>{doc.day}</div>
              <div>{doc.gender}</div>
              <div className="stars" aria-hidden>
                {'★'.repeat(doc.rating) + '☆'.repeat(5 - doc.rating)}
              </div>
              <div className={doc.available ? 'available' : 'unavailable'}>
                {doc.available ? 'Available' : 'Unavailable'}
              </div>
              <div className="actions">
                <button className="icon-btn edit" title="Edit" onClick={() => setEditDoctor(doc)}>
                  <FaEdit />
                </button>
                <button className="icon-btn delete" title="Delete" onClick={() => deleteDoctor(doc.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {pageData.length === 0 && (
            <div style={{ padding: 24, textAlign: 'center', color: '#666' }}>No doctors found.</div>
          )}
        </div>

        {/* Pagination */}
        <div className="pager" style={{ marginTop: 12 }}>
          <Pagination current={currentPage} total={totalPages} onChange={setCurrentPage} />
        </div>

      </div>

      <Footer />
    </>
  );
}
