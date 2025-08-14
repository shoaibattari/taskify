// src/pages/TaskifyDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { CommonButton, EditTaskify, Wrapper } from "../../components";
import apis from "../../config/api";
import { useEffect, useState } from "react";

const TaskifyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  // ✅ Fetch Single Task using useMutation
  const { mutate: fetchTask, isLoading: fetchingTask } = useMutation({
    mutationFn: () => apis.getTaskById(id),
    onSuccess: ({ data }) => {
      setTask(data?.data || null);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to load task");
    },
  });

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  if (fetchingTask) {
    return (
      <Wrapper className="py-12">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-48 w-48 bg-gray-200 rounded-full mx-auto" />
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
          </div>
        </div>
      </Wrapper>
    );
  }

  if (!task) {
    return (
      <Wrapper className="py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 mb-4">Task not found.</p>
          <CommonButton variant="primary" onClick={() => navigate(-1)}>
            Go Back
          </CommonButton>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={task?.avatar?.url || "https://i.pravatar.cc/150?img=48"}
            alt="avatar"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl tablet:text-3xl font-bold text-center text-primary mb-4">
          {task.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm tablet:text-lg leading-relaxed text-center mb-6">
          {task.description || "No description provided"}
        </p>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 text-center mb-8">
          Created at: {new Date(task.createdAt).toLocaleString()}
        </div>

        {/* Actions */}
        <div className="flex flex-col tablet:flex-row justify-center gap-4">
          <CommonButton
            variant="secondary"
            size="md"
            fullWidth
            onClick={() => navigate(-1)}
          >
            Back
          </CommonButton>
          <CommonButton
            variant="primary"
            size="md"
            fullWidth
            onClick={() => setSelectedTask(task)}
          >
            Edit
          </CommonButton>
        </div>
      </div>

      {/* Modal for Editing */}
      {selectedTask && (
        <EditTaskify
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSuccess={fetchTask}
        />
      )}
    </Wrapper>
  );
};

export default TaskifyDetail;
