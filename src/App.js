import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await Home.getAllUsers();
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Home.addUser(form);
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  const handleUpdate = async (id) => {
    const updatedUser = prompt("Enter new values (name,email,age)", "name,email,age");
    if (updatedUser) {
      const [name, email, age] = updatedUser.split(",");
      await Home.updateUser(id, { name, email, age });
      fetchUsers();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await Home.deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="App">
      <h1>Firebase CRUD Operations</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInputChange} required />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleInputChange} required />
        <button type="submit">Add User</button>
      </form>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <p>
              {user.name} - {user.email} - {user.age}
            </p>
            <button onClick={() => handleUpdate(user.id)}>Update</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
