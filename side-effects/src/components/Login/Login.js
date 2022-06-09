import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (lastState, action) =>{ //Fuera del componente porque no interactuara con nada dentro del componente
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value,
      isValid: action.value.includes('@')
    }
  }else if(action.type === 'INPUT_BLUR'){
    return {
      value: lastState.value, //Access to the last state value
      isValid: lastState.value.includes('@')
    }
  }

  return {
    value: '',
    isValid: false
  };
};

const passwordReducer = (lastState, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value,
      isValid: action.value.length > 6
    }
  }else if(action.type === 'INPUT_BLUR'){
    return {
      value: lastState.value,
      isValid: lastState.value.length > 6
    }
  }
  return {
    value: '',
    isValid: false
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  /*
  En este caso usamos un side effect para simplificar el codigo, la que la misma logica se encontraba repetida cuando se modificaba la contrasenia o el usuario.
  En este efecto, hemos agregado esas variables como dependencias, entonces este codigo sera ejecutado cuando la contrasenia o el usuario sean modificados
  */
  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log("Checking validity");
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 1500)

    return ()=>{
      console.log("CLEANUP");
      clearTimeout(identifier);
    }
  },[emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({
      type:'USER_INPUT',
      value: event.target.value
    })

    // setFormIsValid(
    //   emailState.isValid && passwordState.value.length > 6
    // );

    // Using useReducer
    // setFormIsValid(
    //   emailState.value.includes('@') && enteredPassword.trim().length > 6
    // )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type:'USER_INPUT',
      value:event.target.value
    })

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR'
    })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: 'INPUT_BLUR'
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
