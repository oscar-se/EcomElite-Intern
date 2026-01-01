import UserList from "../components/UserList";
import useUsers from "../hooks/useUsers";
import Container from "react-bootstrap/Container";
import UserDetail from "../components/UserDetail";
import { useState } from "react";

function Home() {
  const { users, totalPages, getUsers} = useUsers();
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [dataUserDetail, setDataUserDetail] = useState({});

  
  const handleViewUser = (user) => {
    setDataUserDetail(user);
    setShowUserDetail(true);
  };
  const handleCloseUserDetail = () => {
    setShowUserDetail(false);
    setDataUserDetail({});
  };
  return (
    <div>
        <Container>
            <UserList users={users} totalPages={totalPages} onPageChange={getUsers} onViewUser={handleViewUser} />
            <UserDetail show={showUserDetail} handleClose={handleCloseUserDetail} user={dataUserDetail} />
        </Container>
    </div>
  );
}
export default Home;
