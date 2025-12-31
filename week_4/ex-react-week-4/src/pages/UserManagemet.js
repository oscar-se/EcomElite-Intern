import { useState } from "react";
import useUsers from "../hooks/useUsers";
import TableUsers from "../components/TableUsers";
import Container from "react-bootstrap/Container";
import ModalAddNew from "../components/ModalAddNew";
import ModalEditUser from "../components/ModalEditUser";
import ModalConfirm from "../components/ModalConfirm";

function UserManagement() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [showDeleteUserForm, setShowDeleteUserForm] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const {
    users,
    totalPages,
    getUsers,
    createUser,
    updateTable,
    updateUser,
    handleEditUserFromTable,
    deleteUserById,
    onSortUsersById,
    onSortUsersFirstName,
    handleSearch,
  } = useUsers();

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setShowEditUserForm(true);
  };

  const handleDeleteUser = (user) => {
    setDataUserDelete(user);
    setShowDeleteUserForm(true);
  };

  return (
    <div>
      <Container>
        <TableUsers
          users={users}
          totalPages={totalPages}
          onPageChange={getUsers}
          onAddUser={() => setShowAddUserForm(true)}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
          onSortUsers={onSortUsersById}
          onSortUsersFirstName={onSortUsersFirstName}
          onSearchUsers={handleSearch}
        />
      </Container>
      <ModalAddNew
        show={showAddUserForm}
        handleClose={() => setShowAddUserForm(false)}
        createUser={createUser}
        updateTable={updateTable}
      />
      <ModalEditUser
        show={showEditUserForm}
        handleClose={() => setShowEditUserForm(false)}
        dataUserEdit={dataUserEdit}
        updateUser={updateUser}
        handleEditUserFromTable={handleEditUserFromTable}
      />
      <ModalConfirm
        show={showDeleteUserForm}
        handleClose={() => setShowDeleteUserForm(false)}
        dataUserDelete={dataUserDelete}
        deleteUserById={deleteUserById}
      />
    </div>
  );
}
export default UserManagement;
