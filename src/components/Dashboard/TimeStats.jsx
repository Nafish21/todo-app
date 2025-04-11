// src/components/Dashboard/TimeStats.jsx
import { motion } from "framer-motion";

export default function TimeStats() {
  const timeData = [
    { label: "Reading", duration: "45 mins" },
    { label: "Groceries", duration: "30 mins" },
    { label: "Coding", duration: "1 hr" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass p-6 rounded-2xl mt-6"
    >
      <h2 className="text-xl font-semibold text-white mb-4">Time Spent Summary</h2>
      <ul className="space-y-3 text-white/90 text-sm">
        {timeData.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between bg-white/5 px-4 py-2 rounded-lg border border-white/10"
          >
            <span>{item.label}</span>
            <span className="font-medium text-white">{item.duration}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
