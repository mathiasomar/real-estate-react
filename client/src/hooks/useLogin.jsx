import { message } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (values) => {
    axios.defaults.withCredentials = true;
    try {
      setError(null);
      setLoading(true);

      const res = await axios.post(
        "/api/auth/login",
        values
      );

      // console.log(res)

      if (res.status === 200) {
        message.success(res.data.message);
        login(res.data.token, res.data.user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 404)
      ) {
        setError(error.response.data.message);
      } else {
        setError("Server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
