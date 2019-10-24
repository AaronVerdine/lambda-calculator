import React from "react";

const NumberButton = (props) => {
console.log("NumberButton", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button id={ props.text <  1 ? 'zero' : null } className="number-button" onClick={() => props.addNumber(props.text)}>{props.text }</button>
    </>
  );
};

export default NumberButton;