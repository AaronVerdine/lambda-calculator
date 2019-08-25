import React, { useState } from "react";

//import any components needed
//Import your array data to from the provided data file
import { numbers } from './data.js'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers)
  const changeNumber = () => {
    setNumberState(numberState)
  }
  return (
    <div>  { numberState.map((item, index) => {
      return <NumberButton key={index} number={changeNumber}/>
    })};
    </div>
  )
};

export default Numbers;