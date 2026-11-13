
import { Link } from "react-router-dom";

export default function RememberForgot({
  rememberMe,
  setRememberMe,
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <label className="flex items-center gap-2 text-gray-700">
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
  );
}
