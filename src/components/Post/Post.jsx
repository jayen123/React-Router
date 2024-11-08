import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Post({ post }) {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="bg-teal-400 p-5 rounded-lg text-center">
      <p>ID: {id}</p>
      <h2>{title}</h2>
      <button
        onClick={handleShowDetail}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Details
      </button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
