import axios from "axios";

const apiUrl = process.env.REACT_APP_API_REQRES_URL;
const apiKey = process.env.REACT_APP_API_KEY;

function login(email, password) {
    return axios.post(
        `${apiUrl}/login`,
        { email, password },
        {
            headers: {
                "x-api-key": apiKey
            },
        }
    );
}

export { login };
