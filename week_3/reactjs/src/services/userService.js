const API_KEY = "dev_pub_de054f7dad8c63fe6427d8f7cb18cdce";

// Lây danh sách người dùng từ API
export const getUsers = async () => {
  const response = await fetch(
    "https://reqres.in/api/users?page=1",
    {
      headers: {
        "x-api-key": API_KEY
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json(); // Giả sử API trả về dữ liệu trong trường 'data'
  return data.data; // Trả về mảng người dùng
};
