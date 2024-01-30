export default function SuccessBox({ children }) {
  return (
    <div className="bg-green-200 text-center py-2 border border-solid border-green-300 my-2 rounded-sm">
      {children}
    </div>
  );
}
