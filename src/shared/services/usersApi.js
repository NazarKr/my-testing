import axios from "axios";

const userInstance = axios.create({
  baseURL: "https://64008f7063e89b0913b1bd9b.mockapi.io/users",
});

export const getAllUsers = async () => {
  const { data } = await userInstance.get("/");
  return data;
};


export const addSubscription = (id, followers) => {
  userInstance.put(`/users/${id}/follower`, { followers });
};

export const deleteSubscription = (id, followers) => {
  userInstance.put(`/users/${id}/follower`, { followers });
};

// export const toggleFollowUser = async (id) => {
//   try {
//     const response = await userInstance.put(
//       `/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// export const addUsers = async (data) => {
//   const { data: result } = await userInstance.post("/", data);
//   return result;
// };

// export const deleteUsers = async (id) => {
//   const { data } = await userInstance.delete(`/${id}`);
//   return data;
// };

// export const editUsers = async (id) => {
//   const { data } = await userInstance.put(`/${id}`);
//   return data;
// };

