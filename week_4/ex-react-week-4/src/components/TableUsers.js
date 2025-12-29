import useUsers from "../hooks/useUsers";
import Table from "react-bootstrap/Table";
import Paginate from "./Paginate";

const TableUsers = () => {
  const { users, totalPages, getUsers } = useUsers();
  return (
    <>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">View</button>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginate totalPages={totalPages} onPageChange={getUsers} />
    </>
  );
};
export default TableUsers;
