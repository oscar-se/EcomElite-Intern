const UserItem = ({ user }) => {
    return (
        <div className="user-item">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
        </div>
    );
}

export default UserItem;