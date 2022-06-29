import React from 'react'
import './button.module.css';

function Button(props) {
  return (
    <button>{props.text}</button>
  )
}

export default Button