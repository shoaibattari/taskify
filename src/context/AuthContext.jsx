import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import apis from "../config/api";
import { useMutation } from "react-query";

// Initial state
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
  splashLoading: false,
};

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  // // ✅ LOGIN USER
  // const { mutate: loginUser, isPending: isLoggingIn } = useMutation({
  //   mutationFn: (data) => apis.loginUser(data),
  //   onSuccess: ({ data }) => {
  //     const token = data.token;
  //     if (token) {
  //       localStorage.setItem("token", token);
  //       setAuthState((prev) => ({
  //         ...prev,
  //         token,
  //       }));
  //       toast.success("Login successful!");
  //       loadUser();
  //     }
  //   },
  //   onError: (error) => {
  //     setAuthState({ ...initialAuthState, splashLoading: false });
  //     toast.error(error || "Login failed.");
  //   },
  // });

  // // ✅ REGISTER USER
  // const { mutate: registerUser, isPending: isRegistering } = useMutation({
  //   mutationFn: (data) => apis.registerUser(data),
  //   onSuccess: ({ data }) => {
  //     const token = data.token;
  //     if (token) {
  //       localStorage.setItem("token", token);
  //       setAuthState((prev) => ({
  //         ...prev,
  //         token,
  //       }));
  //       toast.success("Registration successful!");
  //       loadUser();
  //     }
  //   },
  //   onError: (error) => {
  //     setAuthState({ ...initialAuthState, splashLoading: false });
  //     toast.error(error || "Registration failed.");
  //   },
  // });

  // // ✅ FETCH USER PROFILE
  // const { mutate: fetchUser, isPending: fetchingUser } = useMutation({
  //   mutationFn: () => apis.getProfile(),
  //   onSuccess: ({ data }) => {
  //     setAuthState((prev) => ({
  //       ...prev,
  //       isAuthenticated: true,
  //       user: data.data,
  //       role: data.data?.userRole,
  //       splashLoading: false,
  //     }));
  //   },
  //   onError: () => {
  //     localStorage.removeItem("token");
  //     setAuthState({ ...initialAuthState, splashLoading: false });
  //   },
  // });

  // // ✅ SET USER AFTER EDITING
  // const setUpdatedUser = (user) => {
  //   setAuthState((prev) => ({ ...prev, user }));
  // };

  // // ✅ LOGOUT
  // const logout = useCallback(() => {
  //   localStorage.removeItem("token");
  //   setAuthState({ ...initialAuthState, splashLoading: false });
  //   toast.success("Logged out.");
  // }, []);

  // // ✅ LOAD USER ON REFRESH
  // const loadUser = useCallback(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     setAuthState({ ...initialAuthState, splashLoading: false });
  //     return;
  //   }
  //   fetchUser(); // uses mutation internally
  // }, []);

  // useEffect(() => {
  //   loadUser();
  // }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        // isLoggingIn,
        // isRegistering,
        // fetchingUser,
        // login: loginUser,
        // register: registerUser,
        // logout,
        // loadUser,
        // setUpdatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
