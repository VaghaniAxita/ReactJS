import React, { useState } from "react";
import { API } from "../config/api";
import Cookies from "js-cookie";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser = async (data) => {
    // api call
    let res = await API.post("/users/signup", data);
    const { user, token } = res.data;
    console.log(user, token);
    Cookies.set("token", token);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleInput}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;