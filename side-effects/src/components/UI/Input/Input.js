import React,{useRef, useImperativeHandle} from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) =>{
    const inputRef = useRef();

    const activate = () =>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref,()=>{
        return{
            focus: activate //Solo es posible acceder a los metodos expuestos en este return, focus es como se llamara el metodo en el padre y activate es el metodo acvtual en el hijo
        }
    });

    return(
        <div
          className={`${classes.control} ${
            props.inputState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.children}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.inputState.value}
            onChange={props.inputChangeHandler}
            onBlur={props.validateInputHandler}
          />
        </div>
    )
})

export default Input;