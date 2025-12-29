import { useState } from "react";

import TableUsers from "../components/TableUsers";
import Container from "react-bootstrap/Container";
import ModalAddNew from "../components/ModalAddNew";
function UserManagement() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleAddUserClick = () => {
    setShowAddUserForm(true);
  };

  return (
    <div>
      <Container>
        <button className="btn btn-success mt-4" onClick={handleAddUserClick}>Add New User</button>
        <TableUsers />
      </Container>
      <ModalAddNew
        show={showAddUserForm}
        handleClose={() => setShowAddUserForm(false)}
      />
    </div>
  );
}
export default UserManagement;
