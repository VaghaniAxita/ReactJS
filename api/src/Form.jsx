import React, { useState } from "react";
import API from "./config/api";

const Form = () => {
  const [course, setCourse] = useState({
    title: "",
    fee: "",
    duration: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const createCourse = async (course) => {
    let res = await API.post("/courses", course);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(course);
    setCourse({
      title:"",
      fee:"",
      duration: "",
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleInput}
        />
        <input
          type="number"
          name="fee"
          value={course.fee}
          onChange={handleInput}
        />
        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={handleInput}
        />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default Form;