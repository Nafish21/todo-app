import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";
import './index.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (todo) => setTodos([...todos, todo]);

  // Toggle complete/incomplete
  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  // Edit time spent
  const handleTimeChange = (index, newTime) => {
    const updated = [...todos];
    updated[index].timeSpent = newTime;
    setTodos(updated);
  };

  // Edit todo text
  const editTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 min-h-screen text-white font-sans flex flex-col">
      {/* Navbar removed as requested */}
      <main className="flex-grow flex items-center justify-center">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[45%] max-w-3xl mx-auto px-4 py-8 space-y-8 glass shadow-lg rounded-xl">
      <Header />
          <TodoInput addTodo={addTodo} />
          <Dashboard todos={todos} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            handleTimeChange={handleTimeChange}
            editTodo={editTodo}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
