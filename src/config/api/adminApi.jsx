const adminApi = (api) => ({
  getLandingTaskify: () => api.get("/admin/landing-taskify"),
  getAllUsers: () => api.get("/admin/allUsers"),
  getAllTodosForAdmin: () => api.get("/admin/all-taskify"),
  deleteAllTodosForAdmin: () => api.delete("/admin/deletealltodos"),
});

export default adminApi;
