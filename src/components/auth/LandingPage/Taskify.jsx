import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import apis from "../../../config/api";
import { Wrapper } from "../../common";

const Taskify = () => {
  const [tasks, setTasks] = useState([]);

  const { mutate: fetchLandingTaskify, isPending: fetchingTasks } = useMutation(
    {
      mutationFn: () => apis.getLandingTaskify(),
      onSuccess: ({ data }) => {
        setTasks(data?.data || []);
      },
      onError: (error) => {
        console.error("Error fetching landing tasks:", error);
        setTasks([]);
      },
    }
  );

  // Fetch when component mounts
  useEffect(() => {
    fetchLandingTaskify();
  }, [fetchLandingTaskify]);

  if (fetchingTasks) {
    return (
      <section className="py-20 bg-white">
        <Wrapper>
          <div className="flex justify-center items-center">
            <FiLoader className="animate-spin text-primary text-4xl" />
          </div>
        </Wrapper>
      </section>
    );
  }

  return (
    <section id="taskify" className="py-20 bg-white">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Taskify</h2>
        {tasks.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-12">
            {tasks.slice(0, 3).map((task) => (
              <div
                key={task._id}
                className="relative bg-gray-50 shadow-lg rounded-xl p-6 pt-16 hover:shadow-2xl transition"
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={task?.avatar?.url || "/default-avatar.png"}
                    alt="avatar"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-center">{task.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
      </Wrapper>
    </section>
  );
};

export default Taskify;
