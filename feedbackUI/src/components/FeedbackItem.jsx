import { useState } from "react"; //useState from "react";
import propsType from "prop-types";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is feedback item");

  //   const handleClick = () => {
  //     // setRating(10);
  //     setRating((prev) => prev + 1);
  //     console.log(prev);
  //   };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}

FeedbackItem.propTypes = {
  item: propsType.shape({
    id: propsType.number.isRequired,
    text: propsType.string.isRequired,
    rating: propsType.number.isRequired,
  }),
};

export default FeedbackItem;
