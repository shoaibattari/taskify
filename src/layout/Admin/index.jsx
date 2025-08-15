import React from "react";
import { CommonButton } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

import { Link, Route, Routes } from "react-router-dom";
import {
  AdminDashboardScreen,
  AdminTasksScreen,
  AdminUsersScreen,
} from "../../views/index";

const AdminLayout = () => {
  const { logout } = useAuthContext();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Dashbaord</h2>
        <nav className="space-y-2">
          <Link to="/admin" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/tasks" className="block hover:underline">
            All Tasks
          </Link>
          <Link to="/admin/users" className="block hover:underline">
            All Users
          </Link>
        </nav>
        <div className="mt-6">
          <CommonButton onClick={logout}>Logout</CommonButton>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/*" element={<AdminDashboardScreen />} />
          <Route path="/tasks" element={<AdminTasksScreen />} />
          <Route path="/users" element={<AdminUsersScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
