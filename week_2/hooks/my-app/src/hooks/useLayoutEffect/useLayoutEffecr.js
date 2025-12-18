import { useLayoutEffect, useState } from "react";

// useEffect
// 1. Cập nhật lại state
// 2. Thay đổi DOM
// 3. Giao diện được render lại 
// 4. Gọi cleanup function (nếu có)
// 5. Gọi callback trong useEffect


// useLayoutEffect
// 1. Cập nhật lại state
// 2. Thay đổi DOM
// 3. Gọi cleanup function (nếu có)
// 4. Gọi callback trong useLayoutEffect
// 5. Giao diện được render lại

function UseLayoutEffect() {
    const [count, setCount] = useState(0);


    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);

    return (
        <div>
            <h1>UseLayoutEffect Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    )
}

export default UseLayoutEffect;
