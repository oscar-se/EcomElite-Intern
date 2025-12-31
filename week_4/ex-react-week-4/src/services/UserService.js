import axios from "./customize-axios";

const apiUrl = process.env.REACT_APP_API_REQRES_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

function fetchAllUsers(page) {
  

  return axios.get(`${apiUrl}/users?page=${page}`, {
    headers: {
      "x-api-key": apiKey
    }
  });
}

function createNewUser(name, job) {
  return axios.post(`${apiUrl}/users`, { name, job }, {
    headers: {
      "x-api-key": apiKey
    }
  });
}

function editUser(id, name, job) {
  return axios.put(`${apiUrl}/users/${id}`, { name, job }, {
    headers: {
      "x-api-key": apiKey
    }
  });
}

function deleteUser(id) {
  return axios.delete(`${apiUrl}/users/${id}`, {
    headers: {
      "x-api-key": apiKey
    }
  });
}
export { fetchAllUsers, createNewUser, editUser, deleteUser };