import { useReducer, useRef } from "react";

// ToDo list sử dụng useReducer
// Các chức năng:
// - Thêm công việc mới
// - Xoá công việc
// - Đánh dấu công việc đã hoàn thành
// - Lọc công việc theo trạng thái (tất cả, đã hoàn thành, chưa hoàn thành)


// Định nghĩa trạng thái ban đầu
const initialState = {
    job: '',
    todos: [],
};

// Action types
const SET_JOB = 'set_job';
const ADD_TODO = 'add_todo';
const DELETE_TODO = 'delete_todo';

// Action creators
const setJob = payload => {
    return {
        type: SET_JOB,
        payload,
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload,
    }
}

const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload,
    }
}


// Định nghĩa hàm reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload),
            }
        default:
            throw new Error('Invalid action');
    }
}


function ToDoReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {job, todos} = state;

    const ref = useRef();
 

    const handleAddJob = () => {
        dispatch(addTodo(job));
        dispatch(setJob(''));
        ref.current.focus();
    }

    const handleDeleteJob = (index) => {
        dispatch(deleteTodo(index));
    }

    

    return (
        <div style={{padding: '20px'}}>
            <h1>ToDo List with useReducer</h1>
            <input 
                ref={ref}
                value={job} 
                placeholder="Enter todo..." 
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={handleAddJob}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span style={{margin: '12px'}}>{todo}</span>   
                        <button onClick={() => handleDeleteJob(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default ToDoReducer;