import { useNavigate } from "react-router-dom";
import axios from "../api/api";
import { toast } from "react-hot-toast";

function useAuth() {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    const response = await axios
      .post("/api/user/signin", data)
      .catch((e) => toast.error(e.response.data.message));

    if (response.status === 201) {
      toast.success("Tizimga kirildi")
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const data = {
      full_name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };

    const response = await axios
      .post("/api/user/signup", data)
      .catch((e) => alert(e.response.data.message));

    if (response.status === 201) {
      navigate("/login");
    }
  };

  return { login, register };
}
export default useAuth;
