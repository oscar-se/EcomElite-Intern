import axios from "./customize-axios";


function fetchAllUsers(page) {
  const apiUrl = process.env.REACT_APP_API_REQRES_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  return axios.get(`${apiUrl}/users?page=${page}`, {
    headers: {
      "x-api-key": apiKey
    }
  });
}
export { fetchAllUsers };