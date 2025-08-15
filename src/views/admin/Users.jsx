import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../config/api";
import { toast } from "react-toastify";
import { FiUsers } from "react-icons/fi";
import { TaskifySkeleton, UserCard, UserCardSkeleton } from "../../components";
import { useMutation } from "react-query";

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // ✅ Get All Users
  const { mutate: fetchUsers, isLoading: fetchingUsers } = useMutation({
    mutationFn: () => apis.getAllUsers(),
    onSuccess: ({ data }) => {
      console.log("🚀 ~ AllUsers ~ data:", data);
      setUsers(data?.data || []);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to load users");
    },
  });

  // Delete All (Optional, you can add this if you have a delete all users API)
  // const { mutate: deleteAll, isLoading: deletingAll } = useMutation({
  //   mutationFn: () => apis.deleteAllUsers(), // Assuming an API exists
  //   onSuccess: (data) => {
  //     console.log(data);
  //     toast.success("All users deleted!");
  //     fetchUsers();
  //   },
  //   onError: () => {
  //     toast.error("Failed to delete all users");
  //   },
  // });

  // const deleteAllUsers = () => {
  //   if (users.length === 0) {
  //     toast.info("No users to delete");
  //     return;
  //   }
  //   if (window.confirm("Are you sure you want to delete ALL users?")) {
  //     deleteAll();
  //   }
  // };

  // ✅ Component mount par load users
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter((user) => user.userRole === "user");
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiUsers className="text-primary" />
          All Registered Users{" "}
          <span className="text-secondary text-3xl">
            {filteredUsers?.length}
          </span>
        </h1>
        <div className="flex gap-2">
          {/* Optional: Delete all button */}
          {/* {users.length > 0 && (
            <CommonButton
              type="button"
              variant="danger"
              size="md"
              onClick={deleteAllUsers}
              // disabled={deletingAll}
            >
              // {deletingAll ? "Deleting..." : "Delete All"}
            </CommonButton>
          )} */}
        </div>
      </div>

      {fetchingUsers ? (
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-14 py-12">
          {Array.from({ length: 6 }).map((_, idx) => (
            <UserCardSkeleton key={idx} />
          ))}
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          No users registered yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-14 py-12 ">
          {filteredUsers?.map((user) => (
            <UserCard
              key={user?._id}
              user={user}
              // You can add more props for actions like delete or edit
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
