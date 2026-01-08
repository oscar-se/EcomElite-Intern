import { Form, useLoaderData } from "react-router";
import { useSearchParams } from "react-router";
import { getUsers, createUser } from "../services/user.server";
import UserList from "../components/UserList";

export async function loader() {
  return getUsers();
}

export async function action({ request }: any) {
  const formData = await request.formData();

  await createUser({
    name: formData.get("name") as string,
    age: Number(formData.get("age")),
    hometown: formData.get("hometown") as string,
    birthday: new Date(formData.get("birthday") as string),
    phone: formData.get("phone") as string,
    className: formData.get("className") as string,
  });

  return null;
}


//Search param implementation
export default function Users() {
  const users = useLoaderData<any[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ filter: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>Users</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={handleSearch}
          style={{ padding: "0.5rem", width: "300px" }}
        />
        {filter && <span style={{ marginLeft: "1rem" }}></span>}
      </div>

      <Form method="post">
        <input name="name" placeholder="Name" /> <br />
        <input name="age" placeholder="Age" /> <br />
        <input name="hometown" placeholder="Hometown" /> <br />
        <input type="date" name="birthday" /> <br />
        <input name="phone" placeholder="Phone" /> <br />
        <input name="className" placeholder="Class" /> <br />
        <button>Add User</button>
      </Form>

      <UserList users={filteredUsers} />
    </>
  );
}
