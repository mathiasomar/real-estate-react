import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const useAddAdmin = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const addAdmin = async (values) => {
    axios.defaults.headers.common["Authorization"] = token;

    if (values.password !== values.passwordConf) {
        return setError("Password do not match!")
    }

    try {
        setError(null)
        setLoading(true)

        const res = await axios.post('/api/users/add-admin', values)
        if (res.status === 201) {
            message.success(res.data.message)
            navigate('/dashboard/admins')
        }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else {
        setError("Server error");
      }
    } finally {
        setLoading(false)
    }
  };
  return { loading, error, addAdmin };
};

export default useAddAdmin;
