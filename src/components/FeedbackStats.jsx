import { PropTypes } from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

  // we want to show only 1 place after coma, and if .0 we dont want to show 0
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Ratings: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedbacks: PropTypes.array.isRequired,
// };
export default FeedbackStats;
