import React from "react";

const SpecialButton = (props) => {
 console.log("special", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='special-button'>{props.text}</button>
    </>
  );
};

export default SpecialButton;
