import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "dev_pub_de054f7dad8c63fe6427d8f7cb18cdce";
function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                     `https://reqres.in/api/users/${id}`,
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
                setUser(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);
    return (
        <div className="user-detail">
            <h1 className="page-title">Chi Tiết Người Dùng</h1>
            {user ? (
                <>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    )
}
export default UserDetail;