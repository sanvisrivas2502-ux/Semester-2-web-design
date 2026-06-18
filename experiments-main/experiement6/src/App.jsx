import React, { useState } from "react";

function App() {
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

    const newUser = { name, email };

    // ✅ update state properly
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // ✅ show success message
    setMessage("Registration Successful!");

    // clear fields
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

      <button onClick={handleSubmit}>Register</button>

      {message && <div className="success">{message}</div>}

      {/* ✅ Show only after registration */}
      {users.length > 0 && (
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
      )}
    </div>
  );
}

export default App;