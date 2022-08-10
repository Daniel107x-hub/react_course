import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      {/* 
        Use this to make inputs flexible, so we can define at a higher level the type of input that will be in here
        i.e. {type: 'text', 'max':5}, this will be parsed as element arguments
       */}
    </div>
  );
}

export default Input;
