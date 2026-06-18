import { useState } from "react";

function RegistrationForm() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Add user
    setUsers([...users, { name, email }]);

    // Show success message
    setMessage("Registration Successful!");

    // Clear inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button onClick={handleSubmit}>Register</button>

      {message && <div className="success">{message}</div>}

      <div className="users">
        <h3>Registered Users</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegistrationForm;