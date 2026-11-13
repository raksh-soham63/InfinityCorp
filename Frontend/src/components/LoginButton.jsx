
export default function LoginButton({ loading = false }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full h-12 rounded-xl bg-[#a77b2e] hover:bg-[#8e6726] disabled:opacity-60 text-white font-semibold text-sm shadow-md transition"
    >
      {loading ? "Logging in..." : "Login"}
    </button>
  );
}
