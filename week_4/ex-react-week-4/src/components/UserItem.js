const UserItem = ({ user, onViewUser }) => {
    return (
        <div className="user-item" onClick={() => onViewUser(user)}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
        </div>
    );
}

export default UserItem;