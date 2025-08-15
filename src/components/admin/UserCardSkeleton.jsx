const UserCardSkeleton = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col space-y-4 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="space-y-2 flex-grow">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm border-t pt-4 mt-4">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-6 bg-gray-300 rounded-full w-1/5"></div>
      </div>
      <div className="text-xs mt-2">
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
