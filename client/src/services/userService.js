import API from "./api";



// =========================================
// GET USERS
// =========================================
export const getUsers =
  async () => {

    const response =
      await API.get("/users");

    return response.data;
  };






// =========================================
// CREATE USER
// =========================================
export const createUser =
  async (data) => {

    const response =
      await API.post(
        "/users",
        data
      );

    return response.data;
  };






// =========================================
// DELETE USER
// =========================================
export const deleteUser =
  async (id) => {

    const response =
      await API.delete(
        `/users/${id}`
      );

    return response.data;
  };






// =========================================
// UPDATE USER
// =========================================
export const updateUser =
  async (
    id,
    data
  ) => {

    const response =
      await API.put(
        `/users/${id}`,
        data
      );

    return response.data;
  };