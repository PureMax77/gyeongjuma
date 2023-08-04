export const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
      <p className="text-gray-700 text-lg mt-4">Loading...</p>
    </div>
  );
};
