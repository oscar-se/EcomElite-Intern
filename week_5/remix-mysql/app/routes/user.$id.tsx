import { useLoaderData } from "react-router";
import { getUserById } from "../services/user.server";
import UserItem from "~/components/UserItem";
import { Link } from "react-router";


//Dynamic route 
export async function loader({ params }: any) {
  const id = Number(params.id);
  return getUserById(id);
}

export default function UserDetail() {
  const user = useLoaderData();
  return (
    <>
      <h1>User Detail</h1>
      <UserItem user={user} />
      <Link to="/users">Back to Users</Link>
    </>
  );
}
