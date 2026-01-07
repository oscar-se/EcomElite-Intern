import { useParams } from "react-router";

export default function UserDetail() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
