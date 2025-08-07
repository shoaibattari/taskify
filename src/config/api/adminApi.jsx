const adminApi = (api) => ({
  getAllUsers: () => api.get("/admin/allUsers"),
  getAllTodosForAdmin: () => api.get("/admin/allTodos"),
  deleteAllTodosForAdmin: () => api.delete("/admin/deletealltodos"),
});

export default adminApi;
