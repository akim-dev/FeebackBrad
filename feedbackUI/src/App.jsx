import Header from "./components/Header";
import "./App.css";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <div className="container">
        <h1>MyApp</h1>
        <Header text={"Feedback UI"} />
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
