const Loader = () => {
    return (
      <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-gray-100">
        <h3 className="text-lime-500 text-xl">Loading...</h3>
        <div className="w-16 h-16 border-t-4 border-b-4 border-lime-500 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default Loader;
  