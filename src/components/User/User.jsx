import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function User({ user }) {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="bg-teal-400 p-5 rounded-lg text-center">
      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button
        onClick={handleShowDetails}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Details
      </button>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
