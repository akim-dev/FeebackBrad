// import { useState } from "react"; //useState from "react";
import propsType from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propsType.shape({
    id: propsType.number.isRequired,
    text: propsType.string.isRequired,
    rating: propsType.number.isRequired,
  }),
  handleDelete: propsType.func.isRequired,
};

export default FeedbackItem;
