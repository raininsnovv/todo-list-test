import React from "react";

function Form(props) {
  return (
    <div className="form">
      <input
        placeholder="  Write text.."
        type="text"
        name=""
        id=""
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={props.addTodo}>add</button>
    </div>
  );
}

export default Form;
