import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const [theme, setTheme] = useState("dark");
  const { id } = useParams();
  const navigate = useNavigate();
  const handlePrevious = () => {
    if (Number(id) > 1) {
      navigate(`/user/${Number(id) - 1}`);
    }
  };
  const handleNext = () => {
    if (Number(id) < 10) {
      navigate(`/user/${Number(id) + 1}`);
    }
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);
  if (!user) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className={`user-details ${theme}`}>
      <img src={`https://ui-avatars.com/api/?name=${user.name.split(" ")}`} />
      <h1>User Details</h1>
      <div className="top-buttons">
        <button
          className="theme-btn"
          onClick={() => {
            if (theme === "dark") {
              return setTheme("light");
            } else {
              return setTheme("dark");
            }
          }}
        >
          {theme === "dark" ? "🔆Light" : "🌙Dark"}
        </button>

        <Link className="back-btn" to="/">
          ← Back To Users
        </Link>
      </div>

      <div className="btn-grp">
        <button onClick={handlePrevious} disabled={Number(id) === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={Number(id) === 10}>
          Next
        </button>
      </div>

      <h2>{id}</h2>
      <div className="info-section">
        <h3>{user?.name}</h3>
        <h3>✉️ {user?.email}</h3>
        <h3>📞 {user?.phone}</h3>
        <h3> 🌐 {user?.website}</h3>
        <h3>
          <strong>User Name:</strong> {user?.username}
        </h3>
        <h3>
          <strong>Company: </strong>
          {user?.company.name}
        </h3>
        <h3>
          <strong>City: </strong>
          {user?.address.city}
        </h3>
        <h3>
          <strong>Street:</strong>
          {user?.address.street}
        </h3>
        <h3>
          <strong>Suite:</strong> {user?.address.suite}
        </h3>
      </div>
    </div>
  );
}
export default UserDetails;
