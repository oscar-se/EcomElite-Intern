import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("users","routes/users.tsx"),
    route("users/:id","routes/user.$id.tsx"),
    route("login","routes/login.tsx"),
    route("admin","routes/admin.tsx"),
    route("admin/products","routes/admin.products.tsx"),
    route("admin/users","routes/admin.users.tsx"),
] satisfies RouteConfig;
