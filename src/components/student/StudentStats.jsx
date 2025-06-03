import React from 'react'
import { 
  Plus, 
  Search, 
  Download, 
  Edit, 
  Trash2, 
  FileText, 
  Users, 
  Calendar,
  DollarSign,
  Filter,
  X
} from 'lucide-react';

const StudentStats = ({ students }) => {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const totalFees = students.reduce((sum, s) => sum + s.feeAmount, 0);
  const classCount = [...new Set(students.map(s => s.class))].length;

  const stats = [
    {
      title: 'Total Students',
      value: totalStudents,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Students',
      value: activeStudents,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Total Fees',
      value: `$${totalFees.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      title: 'Classes',
      value: classCount,
      icon: Calendar,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-full`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentStats
