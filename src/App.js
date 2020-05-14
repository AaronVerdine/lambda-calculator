import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [currentNum, setCurrentNum] = useState(" ");
  const [display, setDisplay] = useState("");

  // const [operator, setOperator] = useState();

  const addNumber = (number) => {
    setCurrentNum(currentNum + number);
  };
  const addOperator = (operator) => {
    if (operator === "=") {
      setCurrentNum(eval(currentNum));
    } else {
      setCurrentNum(currentNum + " " + operator + " ");
    }
  };

  const specialChars = (specials) => {
    const specialClick = (e) => {
      let value = e.target.value;
      console.log(value);

      switch (value) {
        case "C": {
          setDisplay("");
          break;
        }
        // case "+/-": {
        //   setDisplay((prevState) => math.evaluate(`${prevState} * -1`));
        //   break;
        // }
        // case "%": {
        //   setDisplay((prevState) => math.evaluate(`${prevState} / 100`));
        //   break;
        // }
        default: {
          console.log("something went wrong");
          break;
        }
      }
    };
  };

  return (
    <div className="container">
      <div className="calculator">
        <Logo />
        <Display number={currentNum} />
        <div className="buttons">
          <div className="buttons-left">
            <Specials specialChars={specialChars} />
            <Numbers addNumber={addNumber} />
          </div>
          <div className="buttons-right">
            <Operators addOperator={addOperator} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
