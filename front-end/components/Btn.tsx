const Btn = (props: any) => {
  const { text, disabled, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700"
      } w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {text}
    </button>
  );
};

export default Btn;
