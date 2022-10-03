import React from "react";
import Button from "./shared/Button";

const InputGroup = ({ handleTextChange, text, btnDisabled }) => {
  return (
    <div className='input-group'>
      <input
        type='text'
        placeholder={"write review"}
        onChange={handleTextChange}
        value={text}
      />
      <Button type={"submit"} isDisabled={btnDisabled}>
        send
      </Button>
    </div>
  );
};

export default InputGroup;
