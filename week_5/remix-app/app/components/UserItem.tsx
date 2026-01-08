// import { useNavigate  } from "react-router-dom";

const UserItem = ({ user }: { user: any }) => {
    // const navigate = useNavigate ();

    // // Click vào tên user để điều hướng đến trang chi tiết
    // const handleNameClick = () => {
    //    navigate(`/users/${user.id}`);
    // }
    return (
        <div className="user-item">
            <h3>{user.name}</h3>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default UserItem;