
import { Link } from "react-router-dom";

export default function SignupLink() {
  return (
    <p className="text-center text-sm text-gray-700 mt-7">
      New user?{" "}
      <Link
        to="/register"
        className="text-[#a77b2e] font-semibold hover:underline"
      >
        Create an account
      </Link>
    </p>
  );
}
