import React from "react";
import { CommonButton } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const AdminLayout = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      AdminLayout
      <CommonButton onClick={logout}>Logout</CommonButton>
    </div>
  );
};

export default AdminLayout;
