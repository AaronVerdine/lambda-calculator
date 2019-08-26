import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import { numbers } from '../../../data'

const Numbers = (props) => {
  console.log(numbers)
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers)
  console.log('Numbers', props)
  // const changeNumber = () => {
  //   setNumberState(numberState)
  // }

  return (
    <div>  { numbers.map(number => <NumberButton key={number} text={number} addNumber={props.addNumber} />
    )};
    </div>
    // <>
		// 	<div>
		// 		{numbers.slice(0, 3).map(number => (
		// 			<NumberButton number={number} key={number} setNum={setNum} />
		// 		))}
		// 	</div>
		// 	<div>
		// 		{numbers.slice(3, 6).map(number => (
		// 			<NumberButton number={number} key={number} setNum={setNum} />
		// 		))}
		// 	</div>
		// 	<div>
		// 		{numbers.slice(6, 9).map(number => (
		// 			<NumberButton number={number} key={number} setNum={setNum} />
		// 		))}
		// 	</div>
		// 	<div>
		// 		<NumberButton number={numbers[9]} key={numbers[9]}  setNum={setNum} />
		// 		<NumberButton number={numbers[10]} key={numbers[10]}  setNum={setNum} />
		// 	</div>
		// </>

  )
};

export default Numbers;