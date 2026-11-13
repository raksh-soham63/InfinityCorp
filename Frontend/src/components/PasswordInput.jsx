
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center border border-gray-300 rounded-xl px-3 h-12 bg-white focus-within:border-[#a77b2e]">
      <Lock size={18} className="text-gray-600 shrink-0" />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={onChange}
        required
        className="w-full outline-none px-3 text-sm bg-transparent"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-500"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
