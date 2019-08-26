import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import { numbers } from '../../../data'

const Numbers = () => {

  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers)
  // const changeNumber = () => {
  //   setNumberState(numberState)
  // }
  console.log(numbers)
  return (
    <div>  { numbers.map((item) => 
      <NumberButton key={item} number={item}/>
    )};
    </div>
  )
};

export default Numbers;