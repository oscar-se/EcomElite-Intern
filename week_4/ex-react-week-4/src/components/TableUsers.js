import Table from "react-bootstrap/Table";
import Paginate from "./Paginate";
import "../styles/TableUser.scss";

const TableUsers = ({
  users,
  totalPages,
  onPageChange,
  onAddUser,
  onEditUser,
  onDeleteUser,
  onSortUsers,
  onSortUsersFirstName,
  onSearchUsers,
}) => {
  console.log(users);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <input
          type="text"
          className="form-control w-25 search-box"
          placeholder="Search user by first name..."
          
          onChange={(e) => onSearchUsers(e.target.value)}
        />

        <div >
          <button className="btn btn-info me-2">
          <i class="fa-solid fa-file-import"></i> Import
        </button>
          <button className="btn btn-secondary me-2">
          <i class="fa-solid fa-download"></i> Export
        </button>
          <button className="btn btn-success" onClick={onAddUser}>
          <i class="fa-solid fa-plus"></i> Add New
        </button>
        </div>
        
      </div>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th className="d-flex justify-content-between align-items-center sort-header">
              <span>ID</span>
              <span>
                <i class="fa-solid fa-sort" onClick={onSortUsers}></i>
              </span>
            </th>
            <th>Email</th>
            <th className="d-flex justify-content-between align-items-center sort-header">
              <span>First Name</span>
              <span>
                <i class="fa-solid fa-sort" onClick={onSortUsersFirstName}></i>
              </span>
            </th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEditUser(user)}
                  >
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteUser(user)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Paginate totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};
export default TableUsers;
