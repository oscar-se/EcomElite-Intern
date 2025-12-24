- BrowserRouter
    + Bao bọc toàn bộ ứng dụng
    + Quản lý lịch sử URL bằng HTML5 History API

import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
  <App />
</BrowserRouter>


- Routes và Route
    + Routes: nơi chứa danh sách các route
    + Route: ánh xạ URL → Component

import { Routes, Route } from "react-router-dom";
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

- Link
    + Dùng để điều hướng giữa các trang
    + Thay thế thẻ <a> (không reload trang)

import { Link } from "react-router-dom";
<Link to="/about">About</Link>

Các kiểu Route
1. Exact Route
    - Ở React Router v6, các route mặc định là exact

2. Dynamic Route (Route động)
    - Dùng khi URL có tham số
<Route path="/user/:id" element={<User />} />

Lấy tham số:
import { useParams } from "react-router-dom";
const { id } = useParams();

3. Nested Routes (Route lồng nhau)
    - Dùng khi có layout chung

<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

Trong component cha:
import { Outlet } from "react-router-dom";
<Outlet />

