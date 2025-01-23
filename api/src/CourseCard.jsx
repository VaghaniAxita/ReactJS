import React from "react";

const CourseCard = ({ title, fee, duration, onDelete, id }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{fee}</h3>
      <p>{duration} : months</p>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default CourseCard;