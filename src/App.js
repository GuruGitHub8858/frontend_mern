import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }, []);

  const handleOnSubmit = () => {


    axios.post('http://localhost:5000/register', { name, email })
      .then((response) => {
        const result = response.data;
        console.log(result);
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

  return (
    <div>
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
        <button type="submit" onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
