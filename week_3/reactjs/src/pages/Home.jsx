import UserList from "../components/UserList";
import useUsers from "../hooks/useUsers";

const Home = () => {
    const {users, fetchUsers} = useUsers();

    return (
        <div>
            <h1>User List</h1>
            <button onClick={fetchUsers}>Get Users</button>
            <UserList users={users} />
        </div>
    );
}

export default Home;