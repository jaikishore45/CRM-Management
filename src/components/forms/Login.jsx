import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { role } = JSON.parse(storedAuth);
      if (role === "admin") {
        navigate("/dashboard", { replace: true });
      } else if (role === "user") {
        navigate("/user", { replace: true });
      } else if (role === "client") {
        navigate("/client", { replace: true });
      }
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const mockUsers = [
      { email: "admin@gmail.com", password: "admin123", role: "admin" },
      { email: "user@gmail.com", password: "user123", role: "user" },
      { email: "client@gmail.com", password: "client123", role: "client" },
    ];

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const userAuthData = { email: user.email, role: user.role };
      localStorage.setItem("auth", JSON.stringify(userAuthData));
      setAuth(userAuthData);

      if (user.role === "admin") {
        navigate("/dashboard");
      } else if (user.role === "user") {
        navigate("/user");
      } else if (user.role === "client") {
        navigate("/creator");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
      <div className="bg-white p-8 w-full max-w-md rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Welcome Back</h1>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-indigo-600 hover:text-indigo-700">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
