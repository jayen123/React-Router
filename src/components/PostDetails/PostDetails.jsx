import { useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  const { id, body } = post;

  return (
    <div>
      <h1>Post Details{id} </h1>
      <p>{body}</p>
    </div>
  );
}
