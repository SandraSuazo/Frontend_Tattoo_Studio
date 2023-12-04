import axios from "axios";

const userURL = "http://localhost:3000/user";

export const registerUser = async (newUser) => {
  const result = await axios.post(`${userURL}`, newUser);
  return result;
};

export const loginUser = async (user) => {
  const result = await axios.post(`${userURL}/login`, user);
  return result;
};

export const modifyProfileUser = async (updatedData, token) => {
  const result = await axios.patch(`${userURL}/update-profile`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};

export const deactivateUser = async (userId, token) => {
  const result = await axios.delete(`${userURL}/deactivate/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};
