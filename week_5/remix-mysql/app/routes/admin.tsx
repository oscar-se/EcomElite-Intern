import { Outlet, Link } from "react-router";


//Nested routes 
export default function Admin() {
  return (
    <>
      <h1>Admin Dashboard</h1>

      <nav>
        <Link to="products">Products</Link> |{" "}
        <Link to="users">Users</Link>
      </nav>

      <hr />
      <Outlet />
    </>
  );
}
