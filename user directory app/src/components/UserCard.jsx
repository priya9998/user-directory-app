import "../App.css";
import { Link } from "react-router-dom";
function UserCard({ id, name, email }) {
  return (
    <div className="user-card">
      <Link to={`/user/${id}`}>
        <h2>Name: {name}</h2>
      </Link>

      <h3>Email: {email}</h3>
    </div>
  );
}
export default UserCard;
