import { useState, useReducer } from "react";

// useReducer là một hook trong React được sử dụng để quản lý state phức tạp trong các component chức năng (functional components)
// Nó cung cấp một cách tiếp cận tương tự như Redux để quản lý state thông qua việc sử dụng một hàm reducer
// Cách sử dụng useReducer
// 1. Import useReducer từ React
// 2. Định nghĩa một hàm reducer nhận vào state hiện tại và một action, trả về state mới
// 3. Sử dụng useReducer trong component của bạn, truyền vào hàm reducer và state khởi tạo
// 4. useReducer trả về một mảng gồm state hiện tại và một hàm dispatch để gửi action tới reducer

// Tham số của useReducer
// - reducer: hàm reducer để xử lý các action và cập nhật state
// - initialState: giá trị khởi tạo của state

// Trả về từ useReducer
// - state: state hiện tại
// - dispatch: hàm để gửi action tới reducer


//so sánh giữa useState và useReducer
// - useState đơn giản hơn, phù hợp với state đơn giản và ít phức tạp
// - useReducer phù hợp với state phức tạp, nhiều trạng thái con và logic cập nhật phức tạp
// - useReducer giúp tổ chức mã nguồn tốt hơn khi có nhiều hành động (actions) cần xử lý



function UseReducerHook() {

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increase':
                return state + 1;
            case 'decrease':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);//state, dispatch là tên thường dùng cho biến trả về từ useReducer
    //count là state hiện tại, dispatch là hàm để gửi action tới reducer

    return (
        <div>
            <h1>UseReducer Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch('increase')}>Increase</button> {/*// dispatch gửi action 'increase' tới reducer, reducer sẽ xử lý và trả về state mới */}
            <button onClick={() => dispatch('decrease')}>Decrease</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerHook;
    