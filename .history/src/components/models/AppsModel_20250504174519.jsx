const AppsModel = ({ onClose }) => {
    return (
      <div className="w-1/2 h-[80vh] fixed bottom-14 left-1/2 -translate-x-1/2 bg-white p-10 rounded-lg shadow-lg z-50">
        <input
          type="text"
          placeholder="Type here to search"
          className="bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF] focus:outline-none"
        />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          aria-label="Close"
        >
          Close
        </button>
      </div>
    );
  };
  
  export default AppsModel;
  