import React from "react";
import { CommonButton } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const UserLayout = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      UserLayout
      <CommonButton onClick={logout}>Logout</CommonButton>
    </div>
  );
};

export default UserLayout;
