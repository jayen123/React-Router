import PropTypes from "prop-types";
export default function User({ user }) {

  const { name, email, phone } = user;
  return (
    <div className="bg-teal-400 p-5 rounded-lg text-center">
      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

User.propTypes = {
    user: PropTypes.object.isRequired,
}
