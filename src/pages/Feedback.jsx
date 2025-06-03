import { useState } from 'react';
import { Search } from 'lucide-react';
import StarRating from '../components/feedback/StarRating';
import FeedbackCard from '../components/feedback/FeedbackCard';

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const feedbackData = [
    {
      id: 1,
      studentName: "Sarah Johnson",
      courseName: "Advanced Mathematics",
      rating: 5,
      comment: "This course was absolutely amazing! The way complex concepts were broken down made everything so much easier to understand.",
      date: "2 days ago"
    },
    {
      id: 2,
      studentName: "Michael Chen",
      courseName: "Creative Writing Workshop",
      rating: 4,
      comment: "Really enjoyed the creative exercises and peer feedback sessions. The instructor provided excellent guidance.",
      date: "1 week ago"
    },
    {
      id: 3,
      studentName: "Emily Rodriguez",
      courseName: "Introduction to Physics",
      rating: 5,
      comment: "The hands-on experiments made physics come alive! I never thought I would enjoy physics this much.",
      date: "1 week ago"
    },
    {
      id: 4,
      studentName: "David Kim",
      courseName: "Digital Art Fundamentals",
      rating: 4,
      comment: "Great introduction to digital art tools. Would love to see more advanced techniques covered.",
      date: "2 weeks ago"
    },
    {
      id: 5,
      studentName: "Jessica Brown",
      courseName: "World History Chronicles",
      rating: 3,
      comment: "The content is good but sometimes the pace feels a bit fast. More time for discussion would be helpful.",
      date: "2 weeks ago"
    },
    {
      id: 6,
      studentName: "Alex Thompson",
      courseName: "Advanced Mathematics",
      rating: 5,
      comment: "Excellent course structure and the step-by-step approach to problem-solving is fantastic.",
      date: "3 weeks ago"
    }
  ];

  // Simple search filter
  const filteredFeedback = feedbackData.filter(feedback =>
    feedback.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feedback.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const averageRating = (feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0) / feedbackData.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Feedback</h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Average Rating:</span>
              <StarRating rating={Math.round(averageRating)} />
              <span className="font-medium">{averageRating}</span>
            </div>
            <div className="text-gray-600">
              Total: {feedbackData.length} reviews
            </div>
          </div>
        </div>

        {/* Simple Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by student or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Simple Feedback List */}
        <div className="space-y-4">
          {filteredFeedback.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>

        {filteredFeedback.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No feedback found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;