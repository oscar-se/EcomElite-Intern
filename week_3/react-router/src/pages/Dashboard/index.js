import { Link, Outlet } from "react-router-dom";


//Nested Route Component
//Dashboard chua cac route con Profile va Settings
//Outlet duoc su dung de hien thi noi dung cua cac route con
function Dashboard() {
  return (
    <div>
      <h2>Nested Route – Dashboard</h2>

      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
