// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "./redux/authSlice";
// import { auth } from "./firebase";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import "./index.css";

// const App = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) dispatch(login(user));
//       else dispatch(logout());
//     });
//   }, [dispatch]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
