import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border-t border-white/20 py-6 mt-10"
    >
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-white/60 space-y-1">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">To-Do Master</span>. All rights reserved.
        </p>
        <p>
          Built with ❤️ by{" "}
          <span className="text-purple-400 font-medium">Sk Nafish</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
