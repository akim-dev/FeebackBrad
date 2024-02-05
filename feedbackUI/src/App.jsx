import { useState } from "react";

import Header from "./components/Header";
import "./App.css";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      {/* <div className="container">
        <h1>MyApp</h1>
        <Header text={"Feedback UI"} />
        <FeedbackItem />
      </div> */}

      <Header />
      <div className="container">
        <FeedbackLists feedback={feedback} />
      </div>
    </>
  );
}

export default App;
