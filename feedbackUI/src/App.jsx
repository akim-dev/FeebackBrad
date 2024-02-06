import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import Header from "./components/Header";
import "./App.css";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// import Card from "./components/shared/Card";
import Post from "./components/Post";

// route start here
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

// using context start here
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const deleteFeedback = (id) => {
  //   // console.log("delete", id);
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidV4();
  //   setFeedback([newFeedback, ...feedback]);
  // };
  return (
    <FeedbackProvider>
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
                  <FeedbackForm
                  // handleAdd={addFeedback}
                  />
                  <FeedbackStats
                  // feedback={feedback}
                  />
                  <FeedbackLists
                  // feedback={feedback}
                  // handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}>
              This is about route
            </Route>
            <Route path="/post/:id/:name" element={<Post />}></Route>
            {/* <Card>
              <NavLink to={"/"} activeClassName="active">
                Home
              </NavLink>
              <NavLink to={"/about"} activeClassName="active">
                About
              </NavLink>
            </Card> */}
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
