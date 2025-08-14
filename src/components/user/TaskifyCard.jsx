import React from "react";
import { CommonButton } from "../common";
import { useNavigate } from "react-router-dom";

const TaskifyCard = ({ task, deleteTask, setSelectedTask, deletingTask }) => {
  const navigate = useNavigate();
  return (
    <div
      key={task?._id}
      className="relative bg-gray-50 hover:bg-primary/20 cursor-pointer shadow-lg shadow-secondary rounded-xl space-y-4 p-6 pt-20 hover:shadow-primary transition hover:scale-105 duration-300"
    >
      {/* Avatar */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={task?.avatar?.url || "https://i.pravatar.cc/150?img=48"}
          alt="avatar"
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-center min-h-6 max-h-14 text-gray-800">
        {task?.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center mb-4 line-clamp-4">
        {task?.description || "No description available"}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <CommonButton
          variant="primary"
          fullWidth
          size="md"
          onClick={() => setSelectedTask(task)}
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

      <CommonButton
        variant="secondary"
        fullWidth
        size="md"
        onClick={() => navigate(`taskify/${task?._id}`)}
      >
        View Details
      </CommonButton>
    </div>
  );
};

export default TaskifyCard;
