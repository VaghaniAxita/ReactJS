import React from "react";

const Greetings = ({ name }) => {
  const greeting = name ? `Hello, ${name}!` : "Good Morning!";
  return <div>{greeting}</div>;
};

export default Greetings;
