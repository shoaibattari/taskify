const taskifyApi = (api) => ({
  addTask: (formData) => api.post("/taskify/add", formData),
  getAllTasks: () => api.get("/taskify/all"),
  getTaskById: (id) => api.get(`/taskify/single/${id}`),
  editTask: (id, formData) => api.put(`/taskify/edit/${id}`, formData),
  deleteTask: (id) => api.delete(`/taskify/delete/${id}`),
  deleteAllTasks: () => api.delete("/taskify/deleteAll"),
});

export default taskifyApi;
