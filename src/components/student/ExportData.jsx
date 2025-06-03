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

const ExportData = ({ students }) => {
  const exportToCSV = () => {
    const headers = ['Student ID', 'Name', 'Email', 'Phone', 'Class', 'Fee Amount', 'Joining Date', 'Status', 'Parent Name', 'Parent Phone', 'Address'];
    const csvContent = [
      headers.join(','),
      ...students.map(student => [
        student.studentId,
        student.name,
        student.email,
        student.phone,
        student.class,
        student.feeAmount,
        student.joiningDate,
        student.status,
        student.parentName,
        student.parentPhone,
        `"${student.address.replace(/"/g, '""')}"` // Handle commas in address
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `students_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Student List</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>Student List Report</h1>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Fee Amount</th>
                <th>Joining Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(student => `
                <tr>
                  <td>${student.studentId}</td>
                  <td>${student.name}</td>
                  <td>${student.class}</td>
                  <td>$${student.feeAmount}</td>
                  <td>${new Date(student.joiningDate).toLocaleDateString()}</td>
                  <td>${student.status}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex space-x-3">
      <button
        onClick={exportToCSV}
        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        <Download size={16} className="mr-2" />
        Export CSV
      </button>
      <button
        onClick={exportToPDF}
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        <FileText size={16} className="mr-2" />
        Export PDF
      </button>
    </div>
  );
};

export default ExportData
