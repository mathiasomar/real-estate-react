import { message } from "antd";
import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email: values.email,
        password: values.password,
      });

      console.log(res)

      if (res.status === 200) {
        message.success(res.data.message);
      }
    } catch (error) {
      if (error.response && (error.response.status === 401 || error.response.status === 404)) {
        setError(error.response.data.message)
      } else {
        setError("Server error")
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
