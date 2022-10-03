import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { PropTypes } from "prop-types";
import FeedbackContext from "../context/feedbackContext";

function FeedbackList() {
  const { feedbacks, handleClose, handleEdit } = useContext(FeedbackContext);
  if (!feedbacks || feedbacks.length === 0) return <p>No Feedback Yet</p>;

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleClose={handleClose}
              handleEdit={handleEdit}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedbacks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
export default FeedbackList;
