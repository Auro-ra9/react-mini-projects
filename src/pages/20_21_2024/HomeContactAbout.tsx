//11. Set up a React app with routes for "Home," "About," and "Contact" pages.

//this has already been done along with several projects so moving on...

//12. Implement dynamic routing to show a user profile based on the user ID in the URL.
import { Link } from "react-router-dom";

const HomeContactAbout = () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to the dynamic route */}
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeContactAbout;
