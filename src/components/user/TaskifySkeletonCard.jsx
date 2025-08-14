// src/components/Taskify/TaskifySkeletonCard.jsx
const TaskifySkeletonCard = () => {
  return (
    <div className="relative bg-gray-50 shadow-lg rounded-xl p-6 pt-20 animate-pulse">
      {/* Avatar Skeleton */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-white shadow-md"></div>
      </div>

      {/* Title Skeleton */}
      <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mt-2"></div>

      {/* Description Skeleton */}
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6 mx-auto"></div>
      </div>

      {/* Buttons Skeleton */}
      <div className="flex justify-center gap-3 mt-6">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default TaskifySkeletonCard;
