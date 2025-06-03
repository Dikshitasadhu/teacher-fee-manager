import React from 'react';
import { 
  Plus, Edit3, Trash2, Eye, Users, BookOpen, Clock, TrendingUp, 
  Settings, Upload, Video, FileText, BarChart3, Calendar, 
  MessageSquare, Star, Award, DollarSign, Filter, Search,
  MoreVertical, Play, Pause, ChevronDown, ChevronRight
} from 'lucide-react';

const CourseStatsOverview = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${stat.trendColor}`}>
              {stat.trend}
            </span>
          </div>
          <div className="text-2xl font-light text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CourseStatsOverview;
