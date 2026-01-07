import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <p>
        This is a starter template for your new React Router app. You can start
        editing it right away.
      </p>
    </div>
  );
}
