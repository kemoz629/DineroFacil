import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className=" absolute top-4 left-4  p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
      onClick={() => navigate(-1)}
    >
      ← Go Back
    </button>
  );
};

export default BackButton;
