import { useState } from "react"; //useState from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">This is a feedback item</div>
    </div>
  );
}

export default FeedbackItem;
