import { useLoaderData, useNavigate } from "react-router-dom";

export default function PostDetails() {
  const navigate = useNavigate();
  const post = useLoaderData();
  const { id, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Post Details{id} </h1>
      <p>{body}</p>
      <button
        onClick={handleGoBack}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Go Back
      </button>
    </div>
  );
}
