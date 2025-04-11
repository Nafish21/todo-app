import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const newTodo = {
      text: task,
      completed: false,
      timeSpent,
    };
    addTodo(newTodo);
    setTask("");
    setTimeSpent("");
  };

  return (
    <div className="flex justify-center items-center px-4 mt-10">
      <div className="glass backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-2xl text-white shadow-xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          ✍️ Add New Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 sm:items-center"
        >
          <input
            type="text"
            placeholder="What do you want to do?"
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time (mins)"
            className="w-full sm:w-36 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-xl font-semibold"
          >
            ➕ Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
