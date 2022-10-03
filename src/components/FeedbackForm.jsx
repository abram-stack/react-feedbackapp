import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import InputGroup from "./InputGroup";
import FeedbackContext from "../context/feedbackContext";

function FeedbackForm() {
  const { addFeedback, setFeedbackEdit, feedbackEdit, updateItem } =
    useContext(FeedbackContext);

  //[array dependency], means, everytime this array change it will run the function, it empty, everytime the comp got rendered
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length < 10) {
      setMessage("Review should have at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateItem(feedbackEdit.item.id, newFeedback);

        // setBtnDisabled(true);
      } else addFeedback(newFeedback);
    }

    setText("");
    setFeedbackEdit({
      item: {},
      edit: false,
    });
    setBtnDisabled(true);
    setRating(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate this app</h2>
        {/* todo: select rating here */}
        <RatingSelect select={setRating} selected={rating} />
        <InputGroup
          handleTextChange={handleTextChange}
          text={text}
          btnDisabled={btnDisabled}
        />
      </form>
      {message && <div className='message'>{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
