
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Utensils,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import LoginImg from "../assets/loginPageLeftPic.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Unified login payload for Spring Boot backend
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f7f5f0] overflow-hidden">
      {/* Restaurant Background - Left Hero Panel (Desktop) */}
      <aside className="hidden sm:block sm:w-[30%] lg:w-[38%] relative">
        <img
          src={LoginImg}
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </aside>

      {/* Login Section */}
      <main className="relative flex-1 min-h-screen flex items-center justify-center bg-[#fffefa] px-5 py-10 sm:px-8 lg:px-12 sm:-ml-12 lg:-ml-20 sm:rounded-l-[80px]">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 sm:hidden">
          <img
            src={LoginImg}
            alt="Restaurant background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative z-10 w-full max-w-[390px] mx-auto">
          {/* Brand */}
          <div className="text-center mb-7">
            <div className="flex justify-center mb-2">
              <Utensils
                size={34}
                strokeWidth={1.8}
                className="text-[#a77b2e]"
              />
            </div>

            <h2 className="font-bold text-gray-900 text-lg">
              TableFlow by Infinity Corp
            </h2>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#18212b] mt-8">
              Welcome Back
            </h1>

            <p className="text-gray-600 text-sm mt-2">
              Sign in to your account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 h-12 bg-white focus-within:border-[#a77b2e] focus-within:ring-2 focus-within:ring-[#a77b2e]/20 transition">
              <Mail size={18} className="text-gray-600 shrink-0" />
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none px-3 text-sm bg-transparent"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 h-12 bg-white focus-within:border-[#a77b2e] focus-within:ring-2 focus-within:ring-[#a77b2e]/20 transition">
              <Lock size={18} className="text-gray-600 shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none px-3 text-sm bg-transparent"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-[#a77b2e]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between gap-3 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-[#a77b2e] w-4 h-4"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-semibold text-[#a77b2e] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#a77b2e] hover:bg-[#8e6726] text-white font-semibold text-sm shadow-md transition duration-200 active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-center text-sm text-gray-700 mt-7">
            New user?{" "}
            <Link
              to="/register"
              className="text-[#a77b2e] font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
