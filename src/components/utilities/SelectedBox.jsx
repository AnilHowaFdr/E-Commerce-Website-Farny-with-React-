const SelectedBox = ({ children, title }) => {
  return (
    <div className="pt-9">
      <label className="block pb-3 font-primary font-semibold text-base">
        {title}
      </label>
      <select className="w-full border border-[#9F9F9F] rounded-xl py-5 px-3">
        {children}
      </select>
    </div>
  );
};

export default SelectedBox;
