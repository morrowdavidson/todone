import React from 'react';

const addItemButton = (props) => {
  let buttonOrInput = null;
  
  if (props.enteringInput) {
    buttonOrInput = 
      <li id={props.id + "Input"} className="list-group-item add-task-input">
        <button onClick={props.inputToggleHandler} className="fas fa-plus"></button>
        <input  autoFocus 
                onKeyDown={(event) => {
                  if (event.key === 'Enter'){
                    props.inputToggleHandler(event, "replay");
                    event.target.value = '';
                }}} 
                onBlur={props.inputToggleHandler} 
                id={props.id + "InputField"} 
                type="text" />
      </li>
  }
  else {
    buttonOrInput = 
    <li id={props.id + "Button"} className="list-group-item add-task-button">
      <button onClick={props.inputToggleHandler} className="fas fa-plus"><span>{props.buttonLabel}</span></button>
    </li>
  }
  return (
    <div>
      {buttonOrInput}
    </div>
  )
}

export default addItemButton;