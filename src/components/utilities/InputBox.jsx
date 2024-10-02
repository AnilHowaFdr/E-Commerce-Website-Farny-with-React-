const InputBox = ({ title, type = "text", placeholder }) => {
  return (
    <div className="pb-9">
      <label className="block pb-3 font-primary font-semibold text-base">
        {title}
      </label>
      <input
        type={type}
        className="border border-[#9F9F9F] rounded-xl py-5 px-5 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
