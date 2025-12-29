import { useState, useEffect } from "react";
import { fetchAllUsers } from "../services/UserService";


function useUsers() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = async (page) => {
    try {
      const response = await fetchAllUsers(page);
      if (response && response.data) {
        setTotalPages(response.total_pages);
        setTotalUsers(response.total);
        setUsers(response.data);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return { users, totalPages, totalUsers, currentPage, getUsers };
}

export default useUsers;
