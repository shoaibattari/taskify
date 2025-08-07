const taskifyApi = (api) => ({
  addTodo: (formData) => api.post("/taskify/add", formData),
  getAllTodos: () => api.get("/taskify/all"),
  getTodoById: (id) => api.get(`/taskify/single/${id}`),
  editTodo: (id, formData) => api.put(`/taskify/edit/${id}`, formData),
  deleteTodo: (id) => api.delete(`/taskify/delete/${id}`),
  deleteAllTodos: () => api.delete("/taskify/deleteAll"),
});

export default taskifyApi;
