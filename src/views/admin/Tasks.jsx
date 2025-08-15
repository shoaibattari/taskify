import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import apis from "../../config/api";
import { toast } from "react-toastify";
import {
  CommonButton,
  EditTaskify,
  TaskifyCard,
  TaskifySkeleton,
} from "../../components";
import { FiClipboard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigate = useNavigate();

  // ✅ Get All Tasks
  const { mutate: fetchTasks, isLoading: fetchingTask } = useMutation({
    mutationFn: () => apis.getAllTodosForAdmin(),
    onSuccess: ({ data }) => {
      console.log("🚀 ~ Dashboard ~ data:", data);
      setTasks(data?.data || []);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to load tasks");
    },
  });

  // Delete All
  const { mutate: deleteAll, isLoading: deletingAll } = useMutation({
    mutationFn: () => apis.deleteAllTaskifyForAdmin(),
    onSuccess: (data) => {
      console.log(data);
      toast.success("All tasks deleted!");
      setTasks([]);
      fetchTasks();
    },
    onError: () => {
      toast.error("Failed to delete all tasks");
    },
  });

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
          All Users Tasks{" "}
          <span className="text-secondary text-3xl">{tasks?.length}</span>
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
        </div>
      </div>

      {fetchingTask ? (
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-14 py-12">
          {Array.from({ length: 6 }).map((_, idx) => (
            <TaskifySkeleton key={idx} />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          No tasks yet. Add some!
        </div>
      ) : (
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-14 py-12 ">
          {tasks?.map((task) => {
            return (
              <TaskifyCard
                isAdmin
                key={task?._id}
                // deleteTask={deleteTask}
                // setSelectedTask={setSelectedTask}
                // deletingTask={deletingTask}
                task={task}
              />
            );
          })}
        </div>
      )}

      {/* Modal for Editing */}
      {selectedTask && (
        <EditTaskify
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSuccess={fetchTasks}
        />
      )}
    </div>
  );
};

export default Dashboard;
