import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import apis from "../../config/api";
import { toast } from "react-toastify";
import { CommonButton } from "../../components";
import { FiClipboard, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editingTask, setEditingTask] = useState(false);

  const navigate = useNavigate();

  // ✅ Get All Tasks
  const { mutate: fetchTasks } = useMutation({
    mutationFn: () => apis.getAllTasks(),
    onSuccess: ({ data }) => {
      setTasks(data?.data || []);
      setLoadingTasks(false);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to load tasks");
      setLoadingTasks(false);
    },
  });

  // ✅ Edit Task
  const { mutate: updateTask } = useMutation({
    mutationFn: (updatedTask) => apis.updateTask(updatedTask),
    onSuccess: () => {
      toast.success("Task updated!");
      setEditId(null);
      fetchTasks();
      setEditingTask(false);
    },
    onError: () => {
      toast.error("Failed to update task");
      setEditingTask(false);
    },
  });

  // ✅ Delete Task
  const { mutate: removeTask, isLoading: deletingTask } = useMutation({
    mutationFn: (id) => apis.deleteTask(id),
    onSuccess: () => {
      toast.success("Task deleted!");
      fetchTasks();
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });

  // Delete All
  const { mutate: deleteAll, isLoading: deletingAll } = useMutation({
    mutationFn: () => apis.deleteAllTasks(),
    onSuccess: () => {
      toast.success("All tasks deleted!");
      setTasks([]);
    },
    onError: () => {
      toast.error("Failed to delete all tasks");
    },
  });
  const handleEditClick = (task) => {
    setEditId(task._id);
    setEditText(task.title);
  };

  const handleEditSave = () => {
    if (!editText.trim()) return;
    setEditingTask(true);
    updateTask({ id: editId, title: editText });
  };

  const deleteTask = (id) => {
    removeTask(id);
  };

  const deleteAllTasks = () => {
    if (tasks.length === 0) {
      toast.info("No tasks to delete");
      return;
    }
    if (window.confirm("Are you sure you want to delete ALL tasks?")) {
      deleteAll();
    }
  };

  // ✅ Component mount par load tasks
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiClipboard className="text-primary" />
          My Tasks
        </h1>
        <div className="flex gap-2">
          {tasks.length > 0 && (
            <CommonButton
              type="button"
              variant="danger"
              size="md"
              onClick={deleteAllTasks}
              disabled={deletingAll}
            >
              {deletingAll ? "Deleting..." : "Delete All"}
            </CommonButton>
          )}
          <CommonButton
            type="button"
            variant="primary"
            size="md"
            leftIcon={<FiPlus />}
            onClick={() => navigate("/user/tasks/create")}
          >
            Add Task
          </CommonButton>
        </div>
      </div>

      {loadingTasks ? (
        <div className="text-center py-6 text-gray-500">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          No tasks yet. Add some!
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 py-12">
          {tasks.map((task) => {
            return (
              <div
                key={task._id}
                className="relative bg-gray-50 cursor-pointer shadow-lg shadow-secondary rounded-xl p-6 pt-20 hover:shadow-primary transition"
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={
                      task?.avatar?.url || "https://i.pravatar.cc/150?img=48"
                    }
                    alt="avatar"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                  {task.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4">
                  {task.description || "No description available"}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-3">
                  <CommonButton
                    variant="primary"
                    fullWidth
                    size="md"
                    // onClick={() => handleEditClick(task)}
                  >
                    Edit
                  </CommonButton>
                  <CommonButton
                    variant="danger"
                    size="md"
                    fullWidth
                    disabled={deletingTask}
                    onClick={() => deleteTask(task._id)}
                  >
                    {deletingTask ? "..." : "Delete"}
                  </CommonButton>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
