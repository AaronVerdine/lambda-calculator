import React from "react";

const NumberButton = ({ number }) => {
  // const { number } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button id={ number <  1 ? 'zero' : null } className="number-button">{ number }</button>
    </>
  );
};

export default NumberButton;