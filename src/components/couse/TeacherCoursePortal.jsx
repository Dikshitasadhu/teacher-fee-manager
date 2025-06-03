import { Plus, BookOpen, Users } from 'lucide-react';
import { useState } from 'react';
import CourseCard from './CourseCard';
import AddCourseModal from './AddCourseModal';

const TeacherCoursePortal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Advanced Mathematics",
      category: "Mathematics",
      description: "Comprehensive course covering calculus, algebra, and advanced mathematical concepts for high school students.",
      price: 89,
      students: 45,
      rating: "4.8",
      duration: "12 weeks",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      category: "English",
      description: "Develop your creative writing skills through practical exercises, peer reviews, and professional feedback.",
      price: 65,
      students: 32,
      rating: "4.6",
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Introduction to Physics",
      category: "Science",
      description: "Explore fundamental physics concepts including motion, energy, and forces through hands-on experiments.",
      price: 75,
      students: 28,
      rating: "4.7",
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Digital Art Fundamentals",
      category: "Art",
      description: "Learn digital art techniques using modern tools and software to create stunning visual artwork.",
      price: 55,
      students: 38,
      rating: "4.9",
      duration: "6 weeks",
      level: "Beginner"
    },
    {
      id: 5,
      title: "World History Chronicles",
      category: "History",
      description: "Journey through major historical events and civilizations that shaped our modern world.",
      price: 49,
      students: 52,
      rating: "4.5",
      duration: "14 weeks",
      level: "Intermediate"
    }
  ]);

  const handleAddCourse = (newCourse) => {
    setCourses(prev => [...prev, newCourse]);
  };

  const handleEditCourse = (course) => {
    console.log('Edit course:', course);
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(prev => prev.filter(course => course.id !== courseId));
  };

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.students), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
              <p className="text-gray-600">Manage and create your educational content</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Course
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">$</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
            />
          ))}
        </div>

        {/* Add Course Modal */}
        <AddCourseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCourse}
        />
      </div>
    </div>
  );
};

export default TeacherCoursePortal;