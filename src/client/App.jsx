import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('')

  const handleLogin = () => {
    axios
      .post(`/api/login`, { username, password })
      .then((res) => {
        setToken(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleTest = () => {
    axios.post(`/api/test`, {token}).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <h1>JWT test</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleTest}>Test</button>
    </div>
  );
}

export default App;
