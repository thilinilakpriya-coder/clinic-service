import React from 'react';
import "../assets/AdminDashboard.css";
import { Calendar, Stethoscope, UserCheck } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

export default function AdminDashboard() {
  const navItems = ['Home', 'About us', 'Services', 'News', 'Contact Us'];

  const weeklyData = [
    { day: 'SUN', appointments: 45 },
    { day: 'MON', appointments: 52 },
    { day: 'TUE', appointments: 48 },
    { day: 'WED', appointments: 55 },
    { day: 'THU', appointments: 42 },
    { day: 'FRI', appointments: 50 },
    { day: 'SAT', appointments: 47 },
  ];

  const appointmentStatusData = [
    { name: 'Completed', value: 60, color: '#4ade80' },
    { name: 'Pending', value: 25, color: '#fbbf24' },
    { name: 'Canceled', value: 15, color: '#ef4444' },
  ];

  const appointments = [
    { patient: 'Amara Sahan', doctor: 'Dr. Nimal Perera', date: '2025-10-10', status: 'Scheduled' },
    { patient: 'Suduni Fernando', doctor: 'Dr. Ayesha Raj', date: '2025-10-09', status: 'Completed' },
    { patient: 'Dilhan Silva', doctor: 'Dr. Priya Kumari', date: '2025-10-11', status: 'Canceled' },
    { patient: 'Charitha Pierera', doctor: 'Dr. Shalith Rodrigo', date: '2025-10-08', status: 'Rescheduled' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Canceled': return 'bg-red-100 text-red-700';
      case 'Rescheduled': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">
      <div className="flex flex-col overflow-hidden h-full">
        {/* Navigation Header */}
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">+</span>
                </div>
                <span className="text-xl font-bold text-gray-800">MediCare</span>
              </div>
              <div className="hidden md:flex gap-6">
                {navItems.map((item, index) => (
                  <a key={index} href="#" className="text-sm text-gray-700 hover:text-teal-500">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-md text-sm font-medium shadow-soft">
              BOOK APPOINTMENT
            </button>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* --- FIXED STATS CARDS --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

                  
                  {/* Total Appointments Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-500 text-sm font-medium">Total Appointments</p>
                      </div>
                      <div className="p-3 bg-teal-50 rounded-xl">
                        <Calendar className="text-teal-500" size={28} />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">1,205</p>
                  </div>

                  {/* Total Doctors Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-500 text-sm font-medium">Total Doctors</p>
                      </div>
                      <div className="p-3 bg-teal-50 rounded-xl">
                        <Stethoscope className="text-teal-500" size={28} />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">12</p>
                  </div>

                  {/* Total Patients Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-500 text-sm font-medium">Total Patients</p>
                      </div>
                      <div className="p-3 bg-teal-50 rounded-xl">
                        <UserCheck className="text-teal-500" size={28} />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">456</p>
                  </div>

                </div>
                {/* --- END FIXED STATS CARDS --- */}

                {/* Appointment by Day Chart */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Appointments by Day</h3>
                    <p className="text-sm text-gray-500">Last 7 days</p>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="appointments" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Appointments Table */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Patient</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Doctor</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {appointments.map((apt, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{apt.patient}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{apt.doctor}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{apt.date}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(apt.status)}`}>
                                {apt.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-teal-300 hover:bg-teal-400 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors shadow-soft">
                    Manage Doctors
                  </button>
                  <button className="w-full bg-teal-300 hover:bg-teal-400 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors shadow-soft">
                    Manage Patients
                  </button>
                  <button className="w-full bg-teal-300 hover:bg-teal-400 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors shadow-soft">
                    Manage Appointments
                  </button>
                </div>

                {/* Appointment Status Donut Chart */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Appointment Status</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={appointmentStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {appointmentStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    {appointmentStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-xs text-gray-700">{entry.name} ({entry.value}%)</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop"
                    alt="Medical professionals"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
