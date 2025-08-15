import { FiUser } from "react-icons/fi";

const UserCard = ({ user }) => {
  return (
    <div className="bg-primary/10 rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-transform transform hover:scale-105 cursor-pointer">
      <div className="flex items-center space-x-4">
        {user?.avatar?.url ? (
          <img
            src={user.avatar.url}
            alt={`${user.name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            <FiUser size={24} />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-primary">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mt-4">
        <span className="font-medium">Role:</span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            user.userRole === "admin"
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {user.userRole}
        </span>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Joined: {new Date(user.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default UserCard;
