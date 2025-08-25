import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import apis from "../../config/api";
import { toast } from "react-toastify";
import { FiClipboard, FiUsers, FiCheckSquare } from "react-icons/fi";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  // ✅ Get Stats API
  const { mutate: fetchStats, isLoading } = useMutation({
    mutationFn: () => apis.getStats(),
    onSuccess: ({ data }) => {
      setStats(data?.data || {});
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to load stats");
    },
  });

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 font-outfit">
      {/* Title */}
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-2xl laptop:text-3xl font-bold flex items-center gap-2 text-grey">
          <FiClipboard className="text-primary" />
          Admin Dashboard
        </h1>
      </div>

      {/* ✅ Loading Skeleton */}
      {isLoading && (
        <div className="animate-pulse grid grid-cols-1 tablet:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-light-grey/40 rounded-xl"></div>
          ))}
        </div>
      )}

      {/* ✅ Stats Section */}
      {!isLoading && stats && (
        <>
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mb-10">
            {/* Total Users */}
            <div className="p-6 rounded-2xl shadow-custom bg-gold-soft-gradient flex items-center gap-4 transform transition duration-300 hover:scale-105 animate-fade-in-scale">
              <FiUsers size={36} className="text-grey" />
              <div>
                <p className="text-sm text-grey/70">Total Users</p>
                <p className="text-2xl font-bold text-grey">
                  {stats.totalUsers}
                </p>
              </div>
            </div>

            {/* Total Tasks */}
            <div className="p-6 rounded-2xl shadow-custom bg-gold-soft-gradient flex items-center gap-4 transform transition duration-300 hover:scale-105 animate-fade-in-scale">
              <FiCheckSquare size={36} className="text-grey" />
              <div>
                <p className="text-sm text-grey/70">Total Tasks</p>
                <p className="text-2xl font-bold text-grey">
                  {stats.totalTaskify}
                </p>
              </div>
            </div>

            {/* Users by Role */}
            <div className="p-6 rounded-2xl shadow-custom bg-gold-rich-gradient transform transition duration-300 hover:scale-105 animate-fade-in-scale">
              <p className="text-sm text-grey/70 mb-2">Users by Role</p>
              {stats.usersByRole?.map((role) => (
                <p
                  key={role._id}
                  className="text-grey text-base flex justify-between"
                >
                  <span className="capitalize">{role._id}</span>
                  <span className="font-bold">{role.count}</span>
                </p>
              ))}
            </div>
          </div>

          {/* ✅ Recent Users */}
          <div className="bg-white rounded-2xl shadow-custom p-6 mb-10 animate-fade-slide">
            <h2 className="text-lg flex justify-start items-center gap-2 font-semibold mb-4 text-grey">
              <FiUsers size={23} className="text-grey" />
              Recent Users
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm tablet:text-base">
                <thead>
                  <tr className="border-b text-grey/70">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentUsers?.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b last:border-0 cursor-pointer hover:bg-peach/40 transition"
                    >
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3 capitalize">{user.userRole}</td>
                      <td className="p-3">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ✅ Recent Tasks */}
          <div className="bg-white rounded-2xl shadow-custom p-6 animate-fade-slide">
            <h2 className="text-lg flex justify-start items-center gap-2 font-semibold mb-4 text-grey">
              <FiClipboard size={36} className="text-grey" />
              Recent Taskify
            </h2>
            <ul className="space-y-4">
              {stats.recentTaskify?.map((task) => (
                <li
                  key={task._id}
                  className="border-b pb-3 last:border-0 last:pb-0 cursor-pointer hover:bg-peach/30 rounded-md transition p-2"
                >
                  <p className="font-medium text-grey">{task.title}</p>
                  <p className="text-sm text-grey/70">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-grey text-sm">{task.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
