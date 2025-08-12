import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./config/routes";
import { AuthProvider } from "./context/AuthContext";
import { TaskifyProvider } from "./context/TaskifyContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TaskifyProvider>
          <AuthProvider>
            <Root />
          </AuthProvider>
        </TaskifyProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
