import { useState, useEffect } from "react";
import UserCard from "./UserCard";
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something Went Wrong");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  if (error) {
    return <h1>{error}</h1>;
  }
  if (filteredUsers.length === 0) {
    return <h1>No Users Found</h1>;
  }

  return (
    <div>
      <input
        className="search-input"
        type="text"
        value={search}
        placeholder="Search User"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
      <h2>Total User: {filteredUsers.length}</h2>
    </div>
  );
}
export default UserList;
