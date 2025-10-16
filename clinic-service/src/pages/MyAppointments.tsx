import React, { useMemo, useState } from 'react';
import sampleAppointments from "../data/appointments.ts" ; 

function AppointmentRow({ a, onView, onEdit, onCancel }: any) {
  return (
    <div className="appt-row">
      <div className="col date">{a.date} <div className="time">{a.time}</div></div>
      <div className="col doc">{a.doctor} <div className="dept">{a.department}</div></div>
      <div className="col loc">{a.location}</div>
      <div className="col status">{a.status}</div>
      <div className="col actions">
        <button onClick={() => onView(a)}>View</button>
        <button onClick={() => onEdit(a)}>Edit</button>
        <button onClick={() => onCancel(a)}>Cancel</button>
      </div>
    </div>
  )
}

export default function MyAppointments(){
  const [appointments, setAppointments] = useState(sampleAppointments)
  const [statusFilter, setStatusFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [selected, setSelected] = useState<any>(null)

  const filtered = useMemo(() => {
    return appointments.filter((a: any) => {
      if(statusFilter !== 'All' && a.status !== statusFilter) return false
      if(dateFilter && a.date !== dateFilter) return false
      if(search){
        const s = search.toLowerCase()
        if(!a.doctor.toLowerCase().includes(s) && !a.department.toLowerCase().includes(s)) return false
      }
      return true
    })
  },[appointments,statusFilter,search,dateFilter])

  function handleView(a:any){ setSelected(a) }
  function handleEdit(a:any){ alert('Edit mode (stub) for '+a.id) }
  function handleCancel(a:any){ if(confirm('Cancel appointment?')){ setAppointments((prev:any[]) => prev.map((p:any)=> p.id===a.id?{...p,status:'Cancelled'}:p)) }}

  return (
    <div className="appointments-page">
        <header className="appts-header">
          <h1>My Appointments</h1>
          <div className="appts-controls">
            <input placeholder="Search doctor or department" value={search} onChange={e=>setSearch(e.target.value)} />
            <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}>
              <option>All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
              <option>Completed</option>
            </select>
            <input type="date" value={dateFilter} onChange={e=>setDateFilter(e.target.value)} />
          </div>
        </header>

        <section className="appts-list card">
          {filtered.length===0 ? (
            <div className="empty">
              <p>You have no matching appointments.</p>
              <a href="/">Book appointment</a>
            </div>
          ) : (
            <div className="appt-table">
              <div className="appt-row header">
                <div className="col date">Date & Time</div>
                <div className="col doc">Doctor / Specialist</div>
                <div className="col loc">Location / Room</div>
                <div className="col status">Status</div>
                <div className="col actions">Actions</div>
              </div>
              {filtered.map((a:any)=> (
                <AppointmentRow key={a.id} a={a} onView={handleView} onEdit={handleEdit} onCancel={handleCancel} />
              ))}
            </div>
          )}
        </section>

        {selected && (
          <div className="modal">
            <div className="modal-inner">
              <h3>Appointment Details</h3>
              <p><strong>Doctor:</strong> {selected.doctor} — {selected.department}</p>
              <p><strong>Date & Time:</strong> {selected.date} {selected.time}</p>
              <p><strong>Location:</strong> {selected.location}</p>
              <p><strong>Notes:</strong> {selected.notes || '—'}</p>
              <div className="modal-actions">
                <button onClick={()=>{handleEdit(selected)}}>Edit</button>
                <button onClick={()=>{handleCancel(selected)}}>Cancel</button>
                <button onClick={()=>setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}
