import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  /*
  useRef acepta al igual que useState un valor inicial
  Para indicar a que elemento estaran conectadas, es necesario agregar una propiedad especial en dicho elemento
  Usaremos la propiedad ref en el elemento JSX al que deseamos asociar la referencia

  La primera vez que se renderice el componente, se establecera el valor de las refs a ser elementos del DOM que fueron asociados

  Dado que ahora nuestra ref apunta al elemento, digamos input, podemos acceder a dicho valor cuando queramos! En lugar de tener que almacenar el estado
  en cada cambio de valor del input, podemos leer el valor solo cuando lo necesitamos accediendo al elemento a traves de la propiedad current.value
  En current encontramos un objeto JS del DOM

  Preferir refs cuando solo requerimos leer valores
  */
  const nameInputRef = useRef(); //Siempre es un objeto con una propiedad current
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    const enteredAgeValue = ageInputRef.current.value;
    if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAgeValue < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredNameValue, enteredAgeValue);
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value = ""; //Utilizar con cuidado, no es recomendable manipular el DOM de esta manera, es preferible usar REACT
    ageInputRef.current.value="";
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    [
      error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      ),
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    ]
  );
};

export default AddUser;
