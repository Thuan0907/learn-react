import instance from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  // submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return instance.post("api/v1/participant", data);
};

const putUpdateUser = (id, username, role, image) => {
  // submit data
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return instance.put("api/v1/participant", data);
};

const getAllUsers = () => {
  return instance.get("api/v1/participant/all");
};

const deleteUser = (userId) => {
  return instance.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return instance.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPassword) => {
  return instance.post(`/api/v1/login`, {
    email: userEmail,
    password: userPassword,
  });
};

const postRegister = (email, password, username) => {
  return instance.post(`/api/v1/register`, {
    email,
    password,
    username,
  });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
};
