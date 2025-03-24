import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    dispatch(login(result.user));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login(userCredential.user));
  };

  return (
    <div className="login-container">
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <form onSubmit={handleEmailLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
