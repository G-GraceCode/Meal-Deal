export default function InfoBox({ children }) {
  return (
    <div className="bg-blue-200 text-center py-2 border border-solid border-blue-300 my-2 rounded-sm">
      {children}
    </div>
  );
}
