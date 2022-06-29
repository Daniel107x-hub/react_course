import React from 'react';
import './input.module.css';

function Input(props) {
  return (
    <React.Fragment>
      <label for={props.name}>{props.name}</label>
      <input type={props.type} id={props.name} name={props.name} value={props.value} min='0' max='50' step='1'></input>
    </React.Fragment>
  )
}

export default Input