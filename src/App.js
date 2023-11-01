import React, { useState } from 'react';
import axios from 'axios';
import './app.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNames, setUserNames] = useState([]);

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) => user.name);
        setUserNames(names);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }

  return (
    <div className="container">
      <h1>This is React WebApp</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handlePost}>Post</button>
        <button type="button" onClick={handleGet}>Get</button>
      </form>
      <p>Names: {userNames.join(", ")}</p>
    </div>
  );
}

export default App;
