import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState({ title: "", questions: [] });
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  const handleAddQuestion = () => {
    if (question.trim()) {
      setQuizData({ ...quizData, questions: [...quizData.questions, question] });
      setQuestion("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/quizzes", quizData);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error creating quiz", err);
    }
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Quiz Title"
          value={quizData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        <ul>
          {quizData.questions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;