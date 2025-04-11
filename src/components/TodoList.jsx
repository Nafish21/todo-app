import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos, toggleComplete, deleteTodo, handleTimeChange }) => {
  return (
    <div className="p-4 space-y-3">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`glass text-white p-4 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-3 ${
              todo.completed ? "line-through opacity-60" : ""
            }`}
          >
            <div className="flex-1 text-center sm:text-left">
              <p className="text-base font-medium">{todo.text}</p>
              <p className="text-xs text-gray-300 mt-1">
                ⏱️ {todo.timeSpent || 0} mins
              </p>
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleComplete(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-medium"
              >
                ✅
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteTodo(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium"
              >
                🗑️
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
