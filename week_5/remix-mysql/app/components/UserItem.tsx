import { useNavigate } from "react-router";

const UserItem = ({ user }: { user: any }) => {
    const navigate = useNavigate ();

    // Click vào tên user để điều hướng đến trang chi tiết
    const handleNameClick = () => {
       navigate(`/users/${user.id}`);
    }
    return (
        <div className="user-item" onClick={handleNameClick}>
            <h3 className="name">Name: {user.name}</h3>
            <p className="age">Age: {user.age}</p>
            <p className="hometown">Hometown: {user.hometown}</p>
            <p className="birthday">Birthday: {user.birthday ? new Date(user.birthday).toLocaleDateString() : 'N/A'}</p>
            <p className="phone">Phone: {user.phone}</p>
            <p className="className">Class: {user.className}</p>
        </div>
    );
}

export default UserItem;