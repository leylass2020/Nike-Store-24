export const Button = ({ label, iconURL, stylish, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border
     text-lg px-7 py-4  font-montserrat leading-none 
      ${stylish && stylish} rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow " className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};
