import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState([
    {
      id: 1,
      text: "test from the context",
      rating: 10,
    },
    {
      id: uuidv4(),
      rating: 6,
      text: "test 2",
    },
    {
      id: uuidv4(),
      rating: 10,
      text: "test 3",
    },
    {
      id: uuidv4(),
      rating: 1,
      text: "test 4",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleClose = (id) => {
    setFeedback(feedbacks.filter((f) => f.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedbacks]);
  };

  const handleEdit = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const updateItem = (id, updateItem) => {
    console.log(id);
    console.log(updateItem);
    setFeedback(
      feedbacks.map((feedback) => (
        feedback.id === id ? {...feedback, ...updateItem} : feedback
      ))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        handleClose,
        addFeedback,
        handleEdit,
        feedbackEdit,
        updateItem,
        setFeedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
