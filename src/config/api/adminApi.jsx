const adminApi = (api) => ({
  getLandingTaskify: () => api.get("/admin/landing-taskify"),
  getAllUsers: () => api.get("/admin/all-users"),
  getAllTodosForAdmin: () => api.get("/admin/all-taskify"),
  deleteAllTaskifyForAdmin: () => api.delete("/admin/delete-all-taskify"),
  getStats: () => api.get("/admin/dashboard-stats"),
});

export default adminApi;
