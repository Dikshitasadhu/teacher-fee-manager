import axios from 'axios';
import SearchFilter from '../components/student/SearchFilter';
import StudentForm from '../components/student/StudentForm';
import StudentStats from '../components/student/StudentStats';
import StudentList from '../components/student/StudentList';
import StudentManagement from '../components/student/StudentManagement';
import { useState, useEffect } from 'react';
import ExportData from '../components/student/ExportData';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/students');
        // Ensure response.data is an array
        setStudents(Array.isArray(response.data) ? response.data : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError(err.message);
        // Set sample data if API fails (for development)
        setStudents([
          {
            id: 1,
            studentId: 'STU001',
            name: 'John Doe',
            email: 'john.doe@email.com',
            phone: '+1234567890',
            class: 'Class 10',
            feeAmount: 500,
            joiningDate: '2024-01-15',
            status: 'Active',
            address: '123 Main St, City, State',
            parentName: 'Robert Doe',
            parentPhone: '+1234567891'
          },
          {
            id: 2,
            studentId: 'STU002',
            name: 'Jane Smith',
            email: 'jane.smith@email.com',
            phone: '+1234567892',
            class: 'Class 9',
            feeAmount: 450,
            joiningDate: '2024-02-01',
            status: 'Active',
            address: '456 Oak Ave, City, State',
            parentName: 'Michael Smith',
            parentPhone: '+1234567893'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Safe filtering with fallback to empty array
  const filteredStudents = (students || []).filter(student => {
    if (!student) return false;
    
    const matchesSearch = student.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
    const matchesClass = filterClass === 'all' || student.class === filterClass;
    return matchesSearch && matchesClass;
  });

  // Loading state
  if (loading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error && students.length === 0) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">Failed to load students. {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* ✅ Search & Filter Section */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterClass={filterClass}
        setFilterClass={setFilterClass}
        students={students || []}
      />

      {/* Add Student Form */}
      <StudentForm setStudents={setStudents} />

      {/* Student Stats Summary */}
      <StudentStats students={filteredStudents} />

      {/* Student List */}
      <StudentList students={filteredStudents} setStudents={setStudents} />

      {/* Export and Management */}
      <ExportData students={filteredStudents} />
      <StudentManagement students={filteredStudents} />
    </div>
  );
};

export default Student;