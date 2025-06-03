import React, { useState } from 'react';
import { Users, Clock, Calendar,Star, Edit, Trash2 } from 'lucide-react';

const CourseCard = ({ course, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
        <Star className="w-4 h-4 text-yellow-500 mr-1" />
        <span className="text-sm font-medium">{course.rating}</span>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold mb-1">{course.title}</h3>
        <p className="text-blue-100 text-sm">{course.category}</p>
      </div>
    </div>
    
    <div className="p-6">
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Users className="w-4 h-4 text-gray-500" />
          </div>
          <span className="text-sm text-gray-600">{course.students} Students</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Clock className="w-4 h-4 text-gray-500" />
          </div>
          <span className="text-sm text-gray-600">{course.duration}</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>
          <span className="text-sm text-gray-600">{course.level}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(course)}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(course.id)}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard
