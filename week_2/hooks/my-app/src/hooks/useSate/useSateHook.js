import { useState } from "react";

const number = [10, 20, 30, 40, 50];

// Đây là một component React đơn giản sử dụng hook useState để quản lý state
function UseSateHook() {
  //const [count, setCount] = useState(1); // khai báo state count với giá trị ban đầu là 1
  // Khởi tạo state count với tổng của mảng number, dung callback function để tránh tính toán lại không cần thiết
  const [count, setCount] = useState(() => {
    const total = number.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return total; // Khởi tạo count với tổng của mảng number
  });

  // Hàm để tăng giá trị count
  const handleIncrease = () => {
    setCount(count + 1); // Cập nhật state count bằng cách tăng giá trị hiện tại lên 1
    
    setCount((prevCount) => prevCount + 1); // Sử dụng callback function để đảm bảo lấy giá trị count mới nhất
    setCount((prevCount) => prevCount + 1); // Tăng thêm 1 nữa

  }

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button> 
    </div>
  );
}

export default UseSateHook;
