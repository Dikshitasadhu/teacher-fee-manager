import StarRating from './StarRating';

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-gray-900">{feedback.studentName}</h3>
          <p className="text-sm text-gray-600">{feedback.courseName}</p>
        </div>
        <div className="text-right">
          <StarRating rating={feedback.rating} />
          <p className="text-xs text-gray-500 mt-1">{feedback.date}</p>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        {feedback.comment}
      </p>
    </div>
  );
};

export default FeedbackCard
