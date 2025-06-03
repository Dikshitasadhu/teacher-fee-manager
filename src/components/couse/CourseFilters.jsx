import { useState } from 'react';
import {Filter, Search, ChevronDown} from 'lucide-react';

const CourseFilters = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text" 
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 w-80"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className={`w-4 h-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Sort by:</span>
          <select className="border border-gray-300 rounded-sm px-3 py-1 text-gray-700">
            <option>Recently Updated</option>
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Revenue</option>
          </select>
        </div>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          <select className="border border-gray-300 rounded-sm px-3 py-2">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Under Review</option>
          </select>
          <select className="border border-gray-300 rounded-sm px-3 py-2">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Design</option>
          </select>
          <select className="border border-gray-300 rounded-sm px-3 py-2">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="border border-gray-300 rounded-sm px-3 py-2">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>All time</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CourseFilters
