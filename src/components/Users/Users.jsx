import { useLoaderData } from "react-router-dom";
import User from "../User/User";

export default function Users() {
  const users = useLoaderData();
  return (
    <div>
        <h1>Users: {users.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
