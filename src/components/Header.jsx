import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="text-center py-8 space-y-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
        To-Do Master
      </h1>
      <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
        Plan your day. Track your time. Boost your productivity.
      </p>
    </motion.header>
  );
};

export default Header;
