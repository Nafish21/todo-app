import React, { useState } from "react";

const TodoItem = ({
  todo,
  index,
  toggleComplete,
  deleteTodo,
  handleTimeChange,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      editTodo(index, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 shadow-sm">
      <div className="flex-1 pr-4">
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full px-3 py-1 rounded-lg bg-gray-800 text-white placeholder-white/60 focus:outline-none"
          />
        ) : (
          <p
            onClick={() => toggleComplete(index)}
            className={`text-base cursor-pointer transition ${
              todo.completed ? "line-through text-gray-400" : "text-white"
            }`}
          >
            {todo.text}
          </p>
        )}
        <div className="text-sm text-gray-400 mt-1">
          🕒 {todo.timeSpent || 0} mins
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Time"
          value={todo.timeSpent || ""}
          onChange={(e) => handleTimeChange(index, e.target.value)}
          className="w-16 px-2 py-1 rounded bg-gray-800 text-white text-sm focus:outline-none"
        />
        <button
          onClick={handleEdit}
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="text-red-500 hover:text-red-400 transition"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
