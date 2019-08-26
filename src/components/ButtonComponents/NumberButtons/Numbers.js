import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import { numbers } from '../../../data'

const Numbers = (props) => {
  console.log(numbers)
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers)
  console.log('Numbers', props)
 
  return (
    <div>  { numbers.map(number => <NumberButton key={number} text={number} addNumber={props.addNumber} />
    )}
    </div>

  )
};

export default Numbers;