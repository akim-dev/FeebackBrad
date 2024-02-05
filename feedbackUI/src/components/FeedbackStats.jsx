import propsType from "prop-types";

function FeedbackStats({ feedback }) {
  // calculate rating avg
  let avg = feedback.reduce((accumulator, cur) => {
    return accumulator + cur.rating;
  });

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating:
        {feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length}
      </h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propsType.arrayOf(
    propsType.shape({
      id: propsType.number.isRequired,
      text: propsType.string.isRequired,
      rating: propsType.number.isRequired,
    })
  ),
};

export default FeedbackStats;
