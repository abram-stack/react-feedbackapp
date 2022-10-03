import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import Card from "./shared/Card";
import { PropTypes } from "prop-types";

function FeedbackItem({ feedback, handleClose, handleEdit }) {
  const { rating, text } = feedback;

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleClose(feedback.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => handleEdit(feedback)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

// FeedbackItem.propTypes = {
//   feedback: PropTypes.object.isRequired,
// };
export default FeedbackItem;
