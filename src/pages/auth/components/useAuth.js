import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../core/userSlice";
import { loginUser, registerUser } from "../../../services/apiCalls.js";

export const useAuth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value ?? "",
      password: e.target.password.value ?? "",
      name: e.target.firstName?.value ?? "",
      surname: e.target.lastName?.value ?? "",
    };
    isRegistering
      ? await handleUserRegister(user)
      : await handleUserLogin(user);
  };

  const handleUserRegister = async (user) => {
    try {
      await registerUser(user).then(async () => {
        await handleUserLogin(user);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserLogin = async (user) => {
    try {
      await loginUser(user).then(({ data }) => {
        dispatch(setUser(data.user));
        dispatch(setToken(data.token));
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isRegistering,
    handleSubmit,
    setIsRegistering,
  };
};
