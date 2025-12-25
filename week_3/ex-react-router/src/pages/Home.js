

import UserList from"../components/UserList";
import useUsers from"../hooks/useUsers";

function Home() {
    const users = useUsers();
  return (
    <div>
        <h1 className="page-title">Trang Chủ</h1>
        <UserList users={users} />
    </div>
  );
}
export default Home;