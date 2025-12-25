import { useNavigate  } from "react-router-dom";

const UserItem = ({ user }) => {
    const navigate = useNavigate ();

    // Click vào tên user để điều hướng đến trang chi tiết
    const handleNameClick = () => {
       navigate(`/users/${user.id}`);
    }
    return (
        <div className="user-item" onClick={handleNameClick}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3 className="name" onClick={handleNameClick}>{user.first_name} {user.last_name}</h3>
            <p className="email">{user.email}</p>
        </div>
    );
}

export default UserItem;