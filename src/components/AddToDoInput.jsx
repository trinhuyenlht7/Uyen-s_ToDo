import { useState } from "react";

const AddToDoInput = (props) => {
  const [inputNew, setInputNew] = useState("");
  const { addNewTodo } = props;
  const handleOnchangeInput = (nameInput) => {
    setInputNew(nameInput);
  };

  const handleOnClickAddInput = (inputNew) => {
    addNewTodo(inputNew);
    setInputNew("");
  };

  return (
    <div className="input">
      <input
        type="text"
        value={inputNew}
        onChange={(event) => {
          handleOnchangeInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClickAddInput(inputNew);
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddToDoInput;
