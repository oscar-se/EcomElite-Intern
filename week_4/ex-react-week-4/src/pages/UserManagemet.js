import { useState } from "react";
import useUsers from "../hooks/useUsers";
import TableUsers from "../components/TableUsers";
import Container from "react-bootstrap/Container";
import ModalAddNew from "../components/ModalAddNew";
import ModalEditUser from "../components/ModalEditUser";
import ModalConfirm from "../components/ModalConfirm";
import UserDetail from "../components/UserDetail";

function UserManagement() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [showDeleteUserForm, setShowDeleteUserForm] = useState(false);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [dataUserDetail, setDataUserDetail] = useState({});
  const {
    users,
    totalPages,
    getUsers,
    createUser,
    updateTable,
    importUsers,
    updateUser,
    handleEditUserFromTable,
    deleteUserById,
    onSortUsersById,
    onSortUsersFirstName,
    handleSearch,
  } = useUsers();

  const handleViewUser = (user) => {
    setDataUserDetail(user);
    setShowUserDetail(true);
  };

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
          onViewUser={handleViewUser}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
          onSortUsers={onSortUsersById}
          onSortUsersFirstName={onSortUsersFirstName}
          onSearchUsers={handleSearch}
          importUsers={importUsers}
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
      <UserDetail
        show={showUserDetail}
        handleClose={() => setShowUserDetail(false)}
        user={dataUserDetail}
      />
    </div>
  );
}
export default UserManagement;
