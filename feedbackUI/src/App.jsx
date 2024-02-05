import { useState } from "react";

import Header from "./components/Header";
import "./App.css";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    // console.log("delete", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      {/* <div className="container">
        <h1>MyApp</h1>
        <Header text={"Feedback UI"} />
        <FeedbackItem />
      </div> */}
      <Header />
      <h2>My App</h2>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackLists feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
