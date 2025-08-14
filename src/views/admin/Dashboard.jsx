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
import { FiClipboard, FiPlus } from "react-icons/fi";
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

  // ✅ Component mount par load tasks
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiClipboard className="text-primary" />
          Admin Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
