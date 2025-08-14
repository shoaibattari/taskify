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
            {tasks.slice(0, 3).map((task) => {
              return (
                <div
                  key={task?._id}
                  className="relative bg-gray-50 hover:bg-primary/20 cursor-pointer shadow-lg shadow-secondary rounded-xl space-y-4 p-6 pt-20 hover:shadow-primary transition hover:scale-105 duration-300"
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
                  <h3 className="text-xl font-semibold mb-2 text-center min-h-14 max-h-14 text-gray-800">
                    {task?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-4 line-clamp-4">
                    {task?.description || "No description available"}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
      </Wrapper>
    </section>
  );
};

export default Taskify;
