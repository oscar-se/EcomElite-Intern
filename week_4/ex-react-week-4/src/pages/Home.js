import UserList from "../components/UserList";
import useUsers from "../hooks/useUsers";
import Container from "react-bootstrap/Container";

function Home() {
  const { users, totalPages, getUsers } = useUsers();
  return (
    <div>
        <Container>
            <UserList users={users} totalPages={totalPages} onPageChange={getUsers} />
        </Container>
    </div>
  );
}
export default Home;
