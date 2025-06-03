// components/student/StudentList.jsx
import React, { useState } from 'react';
import { Edit, Trash2, X } from 'lucide-react';

const StudentList = ({ students, setStudents }) => {
  const [editingStudent, setEditingStudent] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEdit = (student) => {
    setEditingStudent(student.id);
    setEditFormData(student);
  };

  const handleSaveEdit = () => {
    setStudents(prev => 
      (prev || []).map(s => 
        s.id === editingStudent ? editFormData : s
      )
    );
    setEditingStudent(null);
    setEditFormData({});
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
    setEditFormData({});
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(prev => (prev || []).filter(s => s.id !== studentId));
    }
  };

  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const safeStudents = students || [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Students List</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fee Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joining Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {safeStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                {editingStudent === student.id ? (
                  // Edit Mode Row
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name || ''}
                        onChange={handleEditChange}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        name="class"
                        value={editFormData.class || ''}
                        onChange={handleEditChange}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        <option value="">Select Class</option>
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={`Class ${num}`}>Class {num}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        name="feeAmount"
                        value={editFormData.feeAmount || ''}
                        onChange={handleEditChange}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="date"
                        name="joiningDate"
                        value={editFormData.joiningDate || ''}
                        onChange={handleEditChange}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        name="status"
                        value={editFormData.status || ''}
                        onChange={handleEditChange}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="text-green-600 hover:text-green-900 px-2 py-1 text-xs bg-green-50 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-600 hover:text-gray-900 px-2 py-1 text-xs bg-gray-50 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  // Display Mode Row
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {student.name?.charAt(0)?.toUpperCase() || 'N'}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${student.feeAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.joiningDate ? new Date(student.joiningDate).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        student.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(student)}
                          className="text-indigo-600 hover:text-indigo-900 p-1 hover:bg-indigo-50 rounded"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {safeStudents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No students found.
        </div>
      )}
    </div>
  );
};

export default StudentList;