import { useEffect, useState } from "react";
import {getUsers} from "../services/userService";

const useUsers = () =>{
    const [users, setUsers] = useState([]);

    // Tự động gọi API khi hook được sử dụng
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        }
        fetchUsers();
    }, []);

    // Hàm để gọi API khi người dùng nhấn nút
    const fetchUsers = async () => {
        const usersData = await getUsers();
        setUsers(usersData);
    }
    return {users, fetchUsers};

}

export default useUsers;