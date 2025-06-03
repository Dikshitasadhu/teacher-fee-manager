import {Plus, Upload} from 'lucide-react';

const CourseHeader = ({ teacherData }) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light text-gray-900">My Courses</h1>
            <p className="text-gray-600 mt-2">Manage and track your course performance</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4" />
              Create New Course
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-sm hover:bg-gray-50 transition-colors">
              <Upload className="w-4 h-4" />
              Import Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseHeader
