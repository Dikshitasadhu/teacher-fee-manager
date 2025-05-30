import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const mockAlerts = [
  {
    name: 'Riya Sharma',
    class: 'Grade 6',
    dueDate: '2025-06-05',
    status: 'Due Soon',
  },
  {
    name: 'Arjun Patel',
    class: 'Grade 8',
    dueDate: '2025-05-28',
    status: 'Overdue',
  },
  {
    name: 'Megha Das',
    class: 'Grade 7',
    dueDate: '2025-06-03',
    status: 'Due Soon',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Overdue':
      return 'bg-red-100 text-red-700';
    case 'Due Soon':
      return 'bg-yellow-100 text-yellow-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const UpcomingAlerts = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaExclamationTriangle className="text-yellow-500" />
        Upcoming Fee Alerts
      </h2>

      {mockAlerts.length > 0 ? (
        <ul className="space-y-3">
          {mockAlerts.map((alert, index) => (
            <li
              key={index}
              className={`p-3 rounded-md flex justify-between items-center ${getStatusColor(alert.status)}`}
            >
              <div>
                <p className="font-medium">{alert.name}</p>
                <p className="text-sm text-gray-600">
                  {alert.class} - Due: {alert.dueDate}
                </p>
              </div>
              <span className="text-sm font-semibold">{alert.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No upcoming alerts.</p>
      )}
    </div>
  );
};

export default UpcomingAlerts;
