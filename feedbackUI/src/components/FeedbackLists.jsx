import FeedbackItem from "./FeedbackItem";
import propsType from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackLists({ feedback, handleDelete }) {
  //   console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  //   return (
  //     <div className="feedback-list">
  //       {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ))}
  //     </div>
  //   );
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
