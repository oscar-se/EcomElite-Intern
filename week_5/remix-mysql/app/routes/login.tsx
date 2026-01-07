import { Form, redirect } from "react-router";

export async function action({ request }: any) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return { error: "Email is required" };
  }

  return redirect("/users");
}

export default function Login() {
  return (
    <Form method="post">
      <input name="email" placeholder="Email" />
      <button>Login</button>
    </Form>
  );
}
