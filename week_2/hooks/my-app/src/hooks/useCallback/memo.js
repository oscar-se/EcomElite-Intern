import { useState, memo } from "react";

// Memo là một hàm cao cấp (Higher Order Function) trong React
// được sử dụng để tối ưu hiệu suất của các component chức năng (functional components)
// Bằng cách ghi nhớ (memoize) kết quả render của một component và chỉ re-render lại khi props của nó thay đổi

// Cách sử dụng memo
// 1. Import memo từ React
// 2. Bọc component chức năng của bạn bằng hàm memo khi xuất khẩu (export) nó
// 3. React sẽ so sánh props hiện tại với props trước đó và chỉ re-render component nếu có sự thay đổi

function MemoComponent() {

    const [count, setCount] = useState(0);
    console.log('Render lại component MemoComponent');
    const handleIncrease = () => {
        setCount(count + 1);
    }   
    return (
        <div>
            <h1>Memo Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrease}>Increase Count</button>
        </div>
    )
}

export default memo(MemoComponent);