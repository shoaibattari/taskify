import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import apis from "../config/api";

const initialTaskifyState = {
  tasks: [],
  loading: false,
  error: null,
};
console.log("🚀 ~ initialTaskifyState.tasks:", initialTaskifyState.tasks);

const TaskifyContext = createContext(initialTaskifyState);

export const TaskifyProvider = ({ children }) => {
  const [taskifyState, setTaskifyState] = useState(initialTaskifyState);

  // ✅ Load all tasks
  const { mutate: loadTasks, isPending: loadingTasks } = useMutation({
    mutationFn: () => apis.getAllTasks(),
    onSuccess: ({ data }) => {
      setTaskifyState((prev) => ({
        ...prev,
        tasks: data || [],
        loading: false,
      }));
    },
    onError: (error) => {
      setTaskifyState((prev) => ({
        ...prev,
        error: error?.message || "Failed to load tasks",
        loading: false,
      }));
      toast.error(error?.message || "Failed to load tasks");
    },
  });

  // ✅ Add Task
  const { mutate: addTask, isPending: addingTask } = useMutation({
    mutationFn: (formData) => apis.addTask(formData),
    onSuccess: () => {
      toast.success("Task added!");
      loadTasks();
    },
    onError: (error) => {
      toast.error(error || "Failed to add task.");
    },
  });

  // ✅ Edit Task
  const { mutate: editTask, isPending: editingTask } = useMutation({
    mutationFn: ({ id, formData }) => apis.editTask(id, formData),
    onSuccess: () => {
      toast.success("Task updated!");
      loadTasks();
    },
    onError: (error) => {
      toast.error(error || "Failed to update task.");
    },
  });

  // ✅ Delete Task
  const { mutate: deleteTask, isPending: deletingTask } = useMutation({
    mutationFn: (id) => apis.deleteTask(id),
    onSuccess: () => {
      toast.success("Task deleted!");
      loadTasks();
    },
    onError: (error) => {
      toast.error(error || "Failed to delete task.");
    },
  });

  // ✅ Delete All Tasks
  const { mutate: deleteAllTasks, isPending: deletingAll } = useMutation({
    mutationFn: () => apis.deleteAllTasks(),
    onSuccess: () => {
      toast.success("All tasks deleted!");
      loadTasks();
    },
    onError: (error) => {
      toast.error(error || "Failed to delete all tasks.");
    },
  });

  // Auto-load tasks on mount
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <TaskifyContext.Provider
      value={{
        ...taskifyState,
        addTask,
        editTask,
        deleteTask,
        deleteAllTasks,
        loadingTasks,
        addingTask,
        editingTask,
        deletingTask,
        deletingAll,
        loadTasks, // manual refresh
      }}
    >
      {children}
    </TaskifyContext.Provider>
  );
};

export const useTaskifyContext = () => useContext(TaskifyContext);
