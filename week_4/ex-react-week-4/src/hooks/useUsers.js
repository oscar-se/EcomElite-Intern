import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { fetchAllUsers } from "../services/UserService";
import { fetchUserById } from "../services/UserService";
import { createNewUser } from "../services/UserService";
import { editUser } from "../services/UserService";
import { deleteUser } from "../services/UserService";

function useUsers(initialPage = 1) {
  const [users, setUsers] = useState([]);
  const [dataUserEdit, setDataUserEdit] = useState({});

  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sortOrder, setSortOrder] = useState("asc");

  const [keyword, setKeyword] = useState("");

  const updateTable = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const importUsers = (importedUsers) => {
    setUsers((prevUsers) => [...importedUsers, ...prevUsers]);
  };

  const setUserEdit = (user) => {
    setDataUserEdit(user);
  };

  const handleEditUserFromTable = (user) => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, first_name: user.first_name } : u
    );
    setUsers(updatedUsers);
  };

  const onSortUsersById = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = debounce((keyword) => {
    setKeyword(keyword);
    console.log("Searching for:", keyword);
    if (keyword === "") {
      getUsers(1);
    } else {
      const filteredUsers = users.filter((user) =>
        user.first_name.toLowerCase().includes(keyword.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  }, 300);

  const onSortUsersFirstName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.first_name.localeCompare(b.first_name);
      } else {
        return b.first_name.localeCompare(a.first_name);
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const getUsers = async (page) => {
    try {
      setLoading(true);
      const response = await fetchAllUsers(page);
      if (response && response.data) {
        setTotalPages(response.total_pages);
        setTotalUsers(response.total);
        setUsers(response.data);
        setCurrentPage(page);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserById = async (id) => {
    try {
      setLoading(true);
      const response = await fetchUserById(id);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (name, job) => {
    try {
      setLoading(true);
      const response = await createNewUser(name, job);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, name, job) => {
    try {
      setLoading(true);
      const response = await editUser(id, name, job);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteUserById = async (id) => {
    try {
      setLoading(true);
      await deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers(initialPage);
  }, [initialPage]);

  return {
    users,
    totalPages,
    totalUsers,
    currentPage,
    loading,
    error,
    dataUserEdit,
    setUserEdit,
    updateTable,
    importUsers,
    handleEditUserFromTable,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
    onSortUsersById,
    onSortUsersFirstName,
    keyword,
    handleSearch,
  };
}

export default useUsers;
