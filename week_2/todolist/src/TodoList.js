
//Component con hiển thị danh sách công việc
function TodoList({ todos, onDelete, editIndex, editText, setEditText, onStartEdit, onSaveEdit, onCancelEdit }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-text">Chưa có công việc nào. Hãy thêm công việc mới!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className="todo-item" key={index}>
          {editIndex === index ? (
            <>
              <input
                className="edit-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSaveEdit(index, editText);
                  if (e.key === 'Escape') onCancelEdit();
                }}
                autoFocus
              />
              <button className="save-btn" onClick={() => onSaveEdit(index, editText)}>Lưu</button>
              <button className="cancel-btn" onClick={onCancelEdit}>Hủy</button>
            </>
          ) : (
            <>
              <span className="todo-text">{todo}</span>
              <button className="edit-btn" onClick={() => onStartEdit(index)}>Sửa</button>
              <button className="delete-btn" onClick={() => onDelete(index)}>Xóa</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
