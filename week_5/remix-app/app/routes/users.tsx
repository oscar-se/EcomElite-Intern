import { Form, useLoaderData } from "react-router";
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

export default function Users() {
  const users = useLoaderData<any[]>();

  return (
    <>
      <h1>Users</h1>

      <Form method="post">
        <input name="name" placeholder="Name" />
        <input name="age" placeholder="Age" />
        <input name="hometown" placeholder="Hometown" />
        <input type="date" name="birthday" />
        <input name="phone" placeholder="Phone" />
        <input name="className" placeholder="Class" />
        <button>Add User</button>
      </Form>

      <UserList users={users} />
    </>
  );
}
