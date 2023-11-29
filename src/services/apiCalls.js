import axios from "axios";

export const registerUser = async (user) => {
  const result = await axios.post("http://localhost:3000/user", user);
  return result;
};

export const loginUser = async (user) => {
  const result = await axios.post("http://localhost:3000/user/login", user);
  return result;
};
