import { Link } from "react-router-dom";

const CardButton = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="font-primary font-normal text-sm mt-7 px-7 py-2 border-2 rounded-full border-black"
    >
      {title}
    </Link>
  );
};

export default CardButton;
