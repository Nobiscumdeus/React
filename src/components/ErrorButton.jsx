export default function ErrorButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={() => {
          throw new Error("Production test error");
        }}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition duration-200"
      >
        🚨 Test Sentry
      </button>
    </div>
  );
}