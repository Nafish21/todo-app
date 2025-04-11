import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#111827] p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md space-y-6 shadow-lg"
      >
        <h2 className="text-2xl text-white font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
