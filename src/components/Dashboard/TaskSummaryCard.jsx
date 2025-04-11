// src/components/Dashboard/TaskSummaryCard.jsx
import { motion } from "framer-motion";

export default function TaskSummaryCard({ title, count, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`p-5 rounded-xl shadow-md border border-white/10 ${color}/20 text-white backdrop-blur-md`}
    >
      <h2 className="text-lg font-medium tracking-wide">{title}</h2>
      <p className="text-3xl font-bold mt-1">{count}</p>
    </motion.div>
  );
}
