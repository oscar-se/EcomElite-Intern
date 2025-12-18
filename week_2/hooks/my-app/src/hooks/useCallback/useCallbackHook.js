import { useState, useCallback } from "react";
import Content from "./conten";

// useCallback là một hook trong React được sử dụng để tối ưu hiệu suất của các component chức năng (functional components)
// Bằng cách ghi nhớ (memoize) một hàm callback và chỉ tạo lại hàm đó khi các dependencies thay đổi


// Cách sử dụng useCallback
// 1. Import useCallback từ React
// 2. Sử dụng useCallback để bọc hàm callback của bạn, truyền vào một mảng dependencies
// 3. React sẽ trả về một phiên bản ghi nhớ của hàm callback, chỉ được tạo lại khi một trong các dependencies thay đổi

// Tham số của useCallback
// - callback: hàm callback mà bạn muốn ghi nhớ
// - dependencies: mảng các dependencies mà khi thay đổi sẽ khiến hàm callback được tạo lại




function UseCallbackHook() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>UseCallback Hook</h1>
            <Content onIncrease={handleIncrease} />
            <h2>Count: {count}</h2>
           
        </div>
    )

}

export default UseCallbackHook;