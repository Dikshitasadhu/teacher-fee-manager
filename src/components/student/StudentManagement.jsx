import { useState } from 'react';
import { Plus} from 'lucide-react';
import StudentForm from './StudentForm';
import ExportData  from './ExportData';
import StudentStats from './StudentStats';
import StudentList from './StudentList';
import SearchFilter from './SearchFilter';

const StudentManagement = () => {
  const [students, setStudents] = useState([
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
    },
    {
      id: 3,
      studentId: 'STU003',
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1234567894',
      class: 'Class 8',
      feeAmount: 400,
      joiningDate: '2024-01-20',
      status: 'Inactive',
      address: '789 Pine Rd, City, State',
      parentName: 'Sarah Johnson',
      parentPhone: '+1234567895'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');

  const handleAddStudent = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleSaveStudent = (studentData) => {
    if (editingStudent) {
      setStudents(students.map(s => s.id === studentData.id ? studentData : s));
    } else {
      setStudents([...students, studentData]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== studentId));
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
            <p className="text-gray-600 mt-1">Manage your students and their information</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <ExportData students={students} />
            <button
              onClick={handleAddStudent}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus size={16} className="mr-2" />
              Add Student
            </button>
          </div>
        </div>

        {/* Statistics */}
        <StudentStats students={students} />

        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          students={students}
        />

        {/* Student List */}
        <StudentList
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
          searchTerm={searchTerm}
          filterClass={filterClass}
        />

        {/* Add/Edit Form Modal */}
        {showForm && (
          <StudentForm
            student={editingStudent}
            onSave={handleSaveStudent}
            onCancel={handleCancelForm}
            isEditing={!!editingStudent}
          />
        )}
      </div>
    </div>
  );
};


export default StudentManagement
