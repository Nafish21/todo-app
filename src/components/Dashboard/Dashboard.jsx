import React from "react";

const Dashboard = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const avgTime =
    total > 0
      ? (
          todos.reduce((acc, curr) => acc + Number(curr.timeSpent || 0), 0) /
          total
        ).toFixed(1)
      : 0;
  const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">📊 Dashboard Overview</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
        {/* Total Tasks */}
        <div className="glass transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center p-4 rounded-lg w-full max-w-[150px] mx-auto">
          <h4 className="text-sm text-gray-300">Total Tasks</h4>
          <p className="text-2xl font-bold mt-1">{total}</p>
        </div>

        {/* Completed */}
        <div className="glass transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center p-4 rounded-lg w-full max-w-[150px] mx-auto">
          <h4 className="text-sm text-gray-300">Completed</h4>
          <p className="text-2xl font-bold mt-1">{completed}</p>
        </div>

        {/* Pending */}
        <div className="glass transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center p-4 rounded-lg w-full max-w-[150px] mx-auto">
          <h4 className="text-sm text-gray-300">Pending</h4>
          <p className="text-2xl font-bold mt-1">{pending}</p>
        </div>

        {/* Avg Time */}
        <div className="glass transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center p-4 rounded-lg w-full max-w-[150px] mx-auto">
          <h4 className="text-sm text-gray-300">Avg Time (min)</h4>
          <p className="text-2xl font-bold mt-1">{avgTime}</p>
        </div>
      </div>

      {/* Completion Rate */}
      <p className="text-center text-sm text-gray-200 mt-4">
        Completion Rate: {completionRate}%
      </p>
    </div>
  );
};

export default Dashboard;
