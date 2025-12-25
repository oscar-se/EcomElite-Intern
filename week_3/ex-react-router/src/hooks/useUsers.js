import { useState, useEffect } from 'react';


const API_KEY = "dev_pub_de054f7dad8c63fe6427d8f7cb18cdce";
function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                   "https://reqres.in/api/users?page=1",
                    {
                        headers: {
                            "x-api-key": API_KEY
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setUsers(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return users;
}
export default useUsers;

   
        

