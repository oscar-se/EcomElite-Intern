import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { useState } from "react";
import { toast } from "react-toastify";

import Table from "react-bootstrap/Table";
import Paginate from "./Paginate";
import "../styles/TableUser.scss";

const TableUsers = ({
  users,
  totalPages,
  onPageChange,
  onAddUser,
  onViewUser,
  onEditUser,
  onDeleteUser,
  onSortUsers,
  onSortUsersFirstName,
  onSearchUsers,
  importUsers,
}) => {

  const [dataExport, setDataExport] = useState([]);

  const generateDataExport = (event, done) => {
    let result = [];
    if (users && users.length > 0) {
      result.push(["ID", "Email", "First Name", "Last Name"]);
      users.forEach((user) => {
        let arr = [];
        arr.push(user.id);
        arr.push(user.email);
        arr.push(user.first_name);
        arr.push(user.last_name);
        result.push(arr);
      });
    }
    setDataExport(result);
    done();
  }

  const handleImprotCSV = (event) =>{
    let file = event.target.files[0];
    if (file && file.type === "text/csv"){
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete: function(results) {
          let rawData = results.data;
          if (rawData && rawData.length > 0){
            if (rawData[0] && rawData[0].length ===4){
              let importedUsers = [];
              for (let i=1; i< rawData.length; i++){
                let obj = {};
                obj.id = rawData[i][0];
                obj.email = rawData[i][1];
                obj.first_name = rawData[i][2];
                obj.last_name = rawData[i][3];
                importedUsers.push(obj);
                
              }
              toast.success("Import users successfully!");
              importUsers(importedUsers);
            }
          }
        }
      });
    } else {
      toast.error("Only accept csv file format!");
      return;
    }
  }
  
  return (
    <>
      <div className="table-toolbar">
        <input
          type="text"
          className="form-control search-box"
          placeholder="Search user by first name..."
          onChange={(e) => onSearchUsers(e.target.value)}
        />

        <div className="toolbar-buttons">
          <label htmlFor="importFile" className="btn btn-info">
            <i class="fa-solid fa-file-import"></i>
            <span className="btn-text">Import</span>
          </label>
          <input type="file" id="importFile" hidden onChange={handleImprotCSV}/>

          <CSVLink
            data={dataExport}
            filename={"users.csv"}
            className="btn btn-secondary"
            asyncOnClick={true}
            onClick={generateDataExport}
          >
            <i class="fa-solid fa-download"></i>
            <span className="btn-text">Export</span>
          </CSVLink>
          <button className="btn btn-success" onClick={onAddUser}>
            <i class="fa-solid fa-plus"></i>
            <span className="btn-text">Add New</span>
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="mt-3 user-table">
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
                  <button 
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => onViewUser(user)}
                  >
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
      </div>
      <Paginate totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};
export default TableUsers;
