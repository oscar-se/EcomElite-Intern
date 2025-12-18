import { use, useRef, useState, useEffect } from "react";

//Ref viet tắt của Reference
//Là một hook trong React cho phép ta tạo ra một đối tượng có thể giữ một giá trị không thay đổi qua các lần render lại của component

//Cách sử dụng useRef
//1. Tạo một biến ref bằng cách gọi useRef và gán nó cho một biến
//2. Truy cập hoặc thay đổi giá trị của biến ref thông qua thuộc tính current của nó
//3. Giá trị của biến ref sẽ không gây ra việc render lại component khi nó thay đổi

function UseRefHook() {
    const [count , setCount] = useState(0);
    const intervalId = useRef();

    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        intervalId.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

    }

    const handleStop = () => {
        clearInterval(intervalId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div>
            <h1>UseRef Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleStart}>Increase Count</button>
            <button onClick={handleStop}>Stop Count</button>

        </div>
    )

}


export default UseRefHook;