import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import apis from "../config/api";
import { useNavigate } from "react-router-dom";

// Initial state
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
  splashLoading: true,
};

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);
  const navigate = useNavigate();

  // ✅ Backend se current user profile fetch karega
  const { mutate: fetchUser } = useMutation({
    mutationFn: () => apis.getProfile(),
    onSuccess: ({ data }) => {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: !!data.data,
        user: data?.data || null,
        role: data?.data?.userRole || null,
        splashLoading: false,
      }));
    },
    onError: () => {
      localStorage.removeItem("token");
      setAuthState({ ...initialAuthState, splashLoading: false });
    },
  });

  const loadUser = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthState({ ...initialAuthState, splashLoading: false });
      return;
    }
    fetchUser();
  }, [fetchUser]);

  // ✅ Login function
  const { mutate: loginUser, isPending: isLoggingIn } = useMutation({
    mutationFn: (data) => apis.loginUser(data),
    onSuccess: ({ data }) => {
      const token = data.token;
      if (token) {
        localStorage.setItem("token", token);

        // Pehle local state me token dalte hain
        setAuthState((prev) => ({
          ...prev,
          token,
          splashLoading: false,
        }));
        toast.success("Login successful!");

        // ✅ Backend se latest user data fetch
        loadUser();
      }
    },
    onError: (error) => {
      toast.error(error);
      setAuthState({ ...initialAuthState, splashLoading: false });
    },
  });

  // ✅ Register function
  const { mutate: registerUser, isPending: isRegistering } = useMutation({
    mutationFn: (data) => apis.registerUser(data),
    onSuccess: ({ data }) => {
      console.log("🚀 ~ AuthProvider ~ data:", data);
      toast.success(data?.message || "Registration successful!");
      navigate("/login");
      loadUser();
    },
    onError: (error) => {
      toast.error(error);
      setAuthState({ ...initialAuthState, splashLoading: false });
    },
  });

  // ✅ Logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setAuthState({ ...initialAuthState, splashLoading: false });
    toast.success("Logged out.");
  }, []);

  // ✅ User update helper
  const setUpdatedUser = (user) => {
    setAuthState((prev) => ({ ...prev, user }));
  };

  // ✅ App start hote hi user load
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: loginUser,
        isLoggingIn,
        register: registerUser,
        isRegistering,
        logout,
        loadUser,
        setUpdatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
