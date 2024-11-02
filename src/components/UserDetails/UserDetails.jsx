import { useLoaderData } from "react-router-dom";
export default function UserDetails() {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h1>UserDetails</h1>
      <h2>{name}</h2>
      <p>Website : {website}</p>
    </div>
  );
}
