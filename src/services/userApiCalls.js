import axios from "axios";

const userURL = "http://localhost:3000/user";

export const registerUser = async (user) => {
  const result = await axios.post(`${userURL}`, user);
  return result;
};

export const loginUser = async (user) => {
  const result = await axios.post(`${userURL}/login`, user);
  return result;
};
