import React, { userState, useState } from "react";
import axios from "axios";

async function loginUser(credentials) {
  return axios
    .post("http://localhost:8080/api/v1/users/login", credentials)
    .then((response) => response.data);
}

function Login(props) {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser({ userName, password }).then((response) => {
      console.log("Token response" + response);
      props.setToken(response.token);
    });
  };

  return (
    <div className="login-wrapper">
      <h1>Please log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
