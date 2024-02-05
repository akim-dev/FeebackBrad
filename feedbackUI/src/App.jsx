import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import Header from "./components/Header";
import "./App.css";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

// route start here
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    // console.log("delete", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidV4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      {/* <div className="container">
        <h1>MyApp</h1>
        <Header text={"Feedback UI"} />
        <FeedbackItem />
      </div> */}
      <Router>
        <Header />

        <h2>My App</h2>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackLists
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}>
              This is about route
            </Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </>
  );
}

export default App;
