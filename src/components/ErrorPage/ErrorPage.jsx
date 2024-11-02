import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && <p>Page Not Found</p>}
      <Link to={"/"}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </button>
      </Link>
    </div>
  );
}
