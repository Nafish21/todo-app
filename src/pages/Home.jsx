// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar />
      <div className="p-6">
        {/* Baaki components yaha render honge */}
      </div>
    </div>
  );
};

export default Home;
