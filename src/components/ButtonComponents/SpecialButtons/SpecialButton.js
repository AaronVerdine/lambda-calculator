import React from "react";

const SpecialButton = (props) => {
  const  { specials } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='special-button'>{ specials }</button>
    </>
  );
};

export default SpecialButton;
