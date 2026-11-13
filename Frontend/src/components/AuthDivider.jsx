
export default function AuthDivider() {
  return (
    <div className="flex items-center gap-4 my-5">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-gray-600 text-sm">or</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
