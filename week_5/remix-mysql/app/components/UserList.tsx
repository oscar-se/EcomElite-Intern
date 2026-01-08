import UserItem from "./UserItem";

const UserList = ({ users }: { users: any[] }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
