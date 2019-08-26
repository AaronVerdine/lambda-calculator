import React from "react";

const OperatorButton = (props) => {
  console.log(props)
  // const { operators } = props;
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-button" onClick={() => props.addOperator(props.text.value)}>{props.text.char}</button>
    </>
  );
};

export default OperatorButton;  