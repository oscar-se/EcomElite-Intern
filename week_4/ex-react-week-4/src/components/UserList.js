import UserItem from "./UserItem";
import Paginate from "./Paginate";

const UserList = ({ users, totalPages, onPageChange, onViewUser }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} onViewUser={onViewUser} />
      ))}
      <Paginate totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default UserList;
