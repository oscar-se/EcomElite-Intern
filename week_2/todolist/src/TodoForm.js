import { useState, useRef } from "react";

// Component con để thêm công việc mới
function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);   // gọi hàm từ component cha
    setText("");
    inputRef.current.focus();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button className="add-btn" type="submit">Thêm</button>
    </form>
  );
}

export default TodoForm;
