import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("users","routes/users.tsx"),
    route("user/:id","routes/user.$id.tsx"),
    route("login","routes/login.tsx"),
] satisfies RouteConfig;
