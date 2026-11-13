
import { Mail } from "lucide-react";

export default function AuthInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="flex items-center border border-gray-300 rounded-xl px-3 h-12 bg-white focus-within:border-[#a77b2e]">
      <Mail size={18} className="text-gray-600 shrink-0" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full outline-none px-3 text-sm bg-transparent"
      />
    </div>
  );
}
