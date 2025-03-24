import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();  
  const count = useSelector((state) => state.counter.value);  

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
