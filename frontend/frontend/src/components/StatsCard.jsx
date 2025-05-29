import React from 'react';
import { FaUserGraduate, FaRupeeSign, FaHourglassHalf, FaCalendarAlt } from 'react-icons/fa';

const iconMap = {
  students: <FaUserGraduate className="text-blue-600 text-3xl" />,
  revenue: <FaRupeeSign className="text-green-600 text-3xl" />,
  pending: <FaHourglassHalf className="text-yellow-500 text-3xl" />,
  month: <FaCalendarAlt className="text-purple-600 text-3xl" />,
};

export default function StatsCard({ title, value, type }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md flex items-center space-x-4">
      <div>{iconMap[type]}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>
    </div>
  );
}
