const Button = ({ onAdd, text, showAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="md:ml-8 bg-gray-800 text-white font-semibold md:text-lg px-4 md:px-6 lg:px-8 py-1 rounded-sm hover:bg-gray-100 hover:text-gray-800 border-2 hover:border-gray-800 transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
