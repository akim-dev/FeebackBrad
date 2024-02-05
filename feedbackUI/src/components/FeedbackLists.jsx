import FeedbackItem from "./FeedbackItem";
import propsType from "prop-types";

function FeedbackLists({ feedback }) {
  //   console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

FeedbackLists.propTypes = {
  feedback: propsType.arrayOf(
    propsType.shape({
      id: propsType.number.isRequired,
      text: propsType.string.isRequired,
      rating: propsType.number.isRequired,
    })
  ),
};

export default FeedbackLists;
